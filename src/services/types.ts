export interface IUpdateProps {
  id: number;
  text: string;
}

export interface IGetAllProps {
  limit: number;
  offset: number;
}

export interface IStatusProps {
  id: number;
  status: boolean;
}
