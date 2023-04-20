import { useState, useEffect } from "react";
import axios from "axios";

export const UseIp = <T,>(ip: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(ip);
                setData(response.data);
            } catch (error:any) {
                setError(error.message);
            }
            setLoading(false);
        };
        fetchData();
    }, [ip])

    return { data, loading, error };
}