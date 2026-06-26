import { supabase } from "../../lib/supabaseClient";

const generateRoomCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

const getCurrentUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("User not logged in");
  }

  return user;
};

export const createRoom = async (roomName: string) => {
  const user = await getCurrentUser();
  const roomCode = generateRoomCode();

  const { data: room, error: roomError } = await supabase
    .from("rooms")
    .insert({
      name: roomName.trim(),
      code: roomCode,
      created_by: user.id,
    })
    .select()
    .single();

  if (roomError) throw roomError;

  const { error: profileError } = await supabase
    .from("profiles")
    .update({ room_id: room.id })
    .eq("id", user.id);

  if (profileError) throw profileError;
};

export const joinRoom = async (roomCode: string) => {
  const user = await getCurrentUser();

  const { data: room, error: roomError } = await supabase
    .from("rooms")
    .select()
    .eq("code", roomCode.trim())
    .single();

  if (roomError || !room) {
    throw new Error("Room not found");
  }

  const { error: profileError } = await supabase
    .from("profiles")
    .update({ room_id: room.id })
    .eq("id", user.id);

  if (profileError) throw profileError;
};
