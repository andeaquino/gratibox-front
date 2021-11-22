import dayjs from "dayjs";

const calculateDeliveryDates = (planType, planDate) => {
  const deliveryDates = [];
  for (let i = 0; i < 3; i++) {
    if (planType === "semanal") {
      if (planDate === "segunda") {
        deliveryDates.push(
          dayjs()
            .day(1 + i * 7)
            .format("DD/MM/YYYY")
        );
      } else if (planDate === "quarta") {
        deliveryDates.push(
          dayjs()
            .day(3 + i * 7)
            .format("DD/MM/YYYY")
        );
      } else {
        deliveryDates.push(
          dayjs()
            .day(5 + i * 7)
            .format("DD/MM/YYYY")
        );
      }
    } else {
      if (
        dayjs()
          .date(Number(planDate))
          .add(i + 1, "month")
          .day() === 0
      ) {
        deliveryDates.push(
          dayjs()
            .date(Number(planDate))
            .add(i + 1, "month")
            .add(1, "day")
            .format("DD/MM/YYYY")
        );
      } else if (
        dayjs()
          .date(Number(planDate))
          .add(i + 1, "month")
          .day() === 6
      ) {
        deliveryDates.push(
          dayjs()
            .date(Number(planDate))
            .add(i + 1, "month")
            .add(2, "day")
            .format("DD/MM/YYYY")
        );
      } else {
        deliveryDates.push(
          dayjs()
            .date(Number(planDate))
            .add(i + 1, "month")
            .format("DD/MM/YYYY")
        );
      }
    }
  }

  return deliveryDates;
};

export { calculateDeliveryDates };
