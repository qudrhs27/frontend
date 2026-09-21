export type Message = {
  text: string;
  sending: boolean;
};

export const initMessages: Message = {
  text: "기본 메시지 입니다",
  sending: false,
};

export type ThreadProps = {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
};
