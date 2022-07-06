/* eslint-disable react/jsx-props-no-spreading */
import ReactApexChart from 'react-apexcharts';

const Chart = ({ ...rest }) => {
    return <ReactApexChart {...rest} />;
};

export default Chart;
