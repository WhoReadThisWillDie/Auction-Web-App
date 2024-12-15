const formatTime = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor(ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export const updateTimeRemaining = (endDate) => {
    const endTime = new Date(endDate);
    const currentTime = new Date();
    const timeDifference = endTime.getTime() - currentTime.getTime();

    if (timeDifference <= 0) {
        return "Auction ended";
    }

    return formatTime(timeDifference);
};