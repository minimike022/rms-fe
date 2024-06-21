<script setup>
import { onMounted, ref, watch } from 'vue'
import axios from 'axios'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {createEventId } from './event-utils'
import CalendarModalComponents from '../../components/calendar_components/CalendarModalComponents.vue'


const fetch_schedule = () => {
    axios.get('http://127.0.0.1:3000/application/status').then(
        res => {
            console.log(res.data)
            for(var i = 0; i < res.data.application_status.length; i++) {
                let color = ref('')
                const start_date = res.data.application_status[i].interview_date + ' ' + res.data.application_status[i].interview_time
                const full_name = res.data.application_status[i].first_name + ' ' + res.data.application_status[i].last_name
                switch(res.data.application_status[i].application_status) {
                    case 'Initial Interview': {
                        color = '#3b82f6'
                        console.log("II")
                        break
                    }
                    case 'Interview with HR': {
                        color = '#7c3aed'
                        console.log("IH")
                        break
                    }
                    case 'Interview with Hiring Manager': {
                        color = '#06b6d4'
                        console.log("IHM")
                        break
                    }

                }
                current_events.value.push({id: createEventId(), title: full_name, start: start_date, backgroundColor: color})
                // console.log(current_events.value)
            }
        }
    )
}

onMounted(() => {
    fetch_schedule()
})


const set_interview = ref({
    applicant_name: '',
    app_status_id: null,
    interviewee_id: null,
    int_time: '',
    int_date: ''
})



const open_calendar_modal = ref(false)
const current_events = ref([{}])

// const handleWeekendsToggle = () => {
//     calendarOptions.weekends = !calendarOptions.weekends
// }

const handleDateSelect = (selectInfo) => {
    open_calendar_modal.value = true
    set_interview.value.int_date = selectInfo.startStr
}

// const handleEventClick = (clickInfo) => {
//     if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//         clickInfo.event.remove()
//     }
// }

const handleEvents = (events) => {
    events = current_events.value 
}


const calendarOptions = ref({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: current_events.value,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    select: handleDateSelect,
    // eventClick: handleEventClick,
    eventsSet: handleEvents
})

</script>

<template>
    <div class="my-4">
        <FullCalendar :options="calendarOptions"/>
    </div>

    <div v-if="open_calendar_modal" class="fixed top-0 right-0 bg-white w-[53dvh] h-[100%] z-[10] shadow-lg p-6">
        <CalendarModalComponents :interview_data="set_interview" @close_modal="open_calendar_modal = false" @fetch_schedule="fetch_schedule"/>
    </div>

</template>