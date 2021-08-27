import React from "react";
import { Inject, ScheduleComponent, Day, Week, Month, Agenda } from '@syncfusion/ej2-react-schedule';

const AppointmentScheduler = () => {

    let data = [];
    return (
        <ScheduleComponent
            eventSettings={{dataSource: data}}
            startHour={'09:00'}
            endHour={'21:00'}
            actionComplete={
                (action: any) => {
                    console.log(action)
                    if (action.requestType === 'eventCreated') {
                        data.push(action.addedRecords[0])
                    }
                    console.log(data)
                }
            }
        >
            <Inject services={[Day, Month, Week, Agenda]}/>
        </ScheduleComponent>
    )
}

export default AppointmentScheduler;