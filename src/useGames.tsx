import { useState, useEffect } from "react";
import axios from "axios";
import { Props } from "./components/categoryDisplay";

export type ApiData = {
  title: string;
  img: string;
  description: string;
  category: string;
  cost: string;
  trailer: string;
  platform: string;
  release: string;
  publisher: string;
};

const url = "https://gamesapi-8lyv.onrender.com/";

export const useGames = ({ category }: Props) => {
  const [data, setData] = useState<ApiData[] | null>(null);
  const [dataAll, setDataAll] = useState<ApiData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const filter = await response.data.filter(
          (item: ApiData) => item.category === category
        );
        if (category == "All") {
          setData(response.data);
          setDataAll(response.data);
        } else {
          setData(filter);
          setDataAll(response.data);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading, dataAll };
};
