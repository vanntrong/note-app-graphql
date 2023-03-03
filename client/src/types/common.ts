export interface BaseServiceOptions<T = any> {
  onSuccess?: (data?: T) => void;
  onError?: (error: Error) => void;
  skip?: boolean;
}
