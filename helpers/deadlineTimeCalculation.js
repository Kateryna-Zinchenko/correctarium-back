import moment from "moment";

const deadlineTimeCalculation = (deadline) => {
    return moment(deadline).format("DD/MM/YYYY HH:mm:00", "uk");
}

export default deadlineTimeCalculation;
