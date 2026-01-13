import api from "./api";

export type SendWhatsAppPayload = {
  phone: string;
  message: string;
};

export type SendWhatsAppResponse = {
  status: string;
  result?: any;
  error?: string;
};

export async function sendWhatsAppMessage(
  payload: SendWhatsAppPayload
): Promise<SendWhatsAppResponse> {
  try {
    const response = await api.post(
      "/api/send-whatsapp/",
      payload
    );

    return response.data;
  } catch (error: any) {
    if (error.response) {
      // Server responded with an error
      throw new Error(
        error.response.data?.error || "Failed to send WhatsApp message"
      );
    } else {
      // Network / unexpected error
      throw new Error("Network error. Please try again.");
    }
  }
}
