import { useState, useEffect, useCallback } from 'react';
import { statsData, usageDataByRange, activitiesData } from '../data/mockData';

export function useDashboardData() {
    const [dateRange, setDateRange] = useState('Last 7 Days');
    const [statusFilter, setStatusFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        stats: statsData,
        usageData: [],
        activities: [],
    });

    const fetchData = useCallback(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            const usageData = usageDataByRange[dateRange] || usageDataByRange['Last 7 Days'];

            let filtered = [...activitiesData];

            const now = Date.now();
            let daysToSubtract = 7;
            if (dateRange === 'Last 30 Days') daysToSubtract = 30;
            if (dateRange === 'Last 90 Days') daysToSubtract = 90;
            const cutoffTime = now - daysToSubtract * 24 * 60 * 60 * 1000;

            filtered = filtered.filter(a => a.timestamp >= cutoffTime);

            if (statusFilter !== 'all') {
                filtered = filtered.filter((a) => a.type === statusFilter);
            }

            filtered.sort((a, b) => b.timestamp - a.timestamp);

            setData({
                stats: statsData,
                usageData,
                activities: filtered,
            });
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [dateRange, statusFilter]);

    useEffect(() => {
        const cleanup = fetchData();
        return cleanup;
    }, [fetchData]);

    return {
        ...data,
        dateRange,
        setDateRange,
        statusFilter,
        setStatusFilter,
        loading,
    };
}
