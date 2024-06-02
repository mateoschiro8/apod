
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const MyComponent = (props) => {

    const { selectedDate, setSelectedDate } = props;

    return (
        <div className ="calendar"> 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar 
                    value={selectedDate}
                    minDate={dayjs('1995-06-16')}
                    disableFuture={true} 
                    onChange={(newDate) => {
                        setSelectedDate(newDate);
                    }}  
                    />
            </LocalizationProvider>
        </div>
    );
};

export default MyComponent;
