export type ObjectResponse<T> = {
  Data: T;
  ErrorNotification: {
    Messages: string[];
  };
  SuccessNotification: {
    Messages: string[];
  };
  IsSuccess: boolean;
};
