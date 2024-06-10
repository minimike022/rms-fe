<script setup>
import { ref, watch } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { options } from '@fullcalendar/core/preact.js';
import {INITIAL_EVENTS,createEventId } from './event-utils'
import CalendarModalComponents from '../../components/calendar_components/CalendarModalComponents.vue'


const set_interview = ref({
    applicant_name: '',
    app_status_id: null,
    interviewee_id: null,
    int_time: '',
    int_date: ''
})

const open_calendar_modal = ref(false)
const current_events = ref([])

const handleWeekendsToggle = () => {
    calendarOptions.weekends = !calendarOptions.weekends
}

const handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar

    open_calendar_modal.value = true

    set_interview.value.int_date = selectInfo.startStr
    
    calendarApi.unselect() // clear date selection

    // if (title) {
    //     calendarApi.addEvent({
    //         id: createEventId(),
    //         title,
    //         start: selectInfo.startStr,
    //     })
    // }
}

const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
    }
}

const handleEvents = (events) => {
    current_events.value = events
    console.log(current_events.value)
}


const calendarOptions = ref({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    // initialEvents: INITIAL_EVENTS,
    events: current_events.value,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    select: handleDateSelect,
    eventClick: handleEventClick,
    eventsSet: handleEvents
})

</script>

<template>
    <div class="h-screen">
        <FullCalendar :options="calendarOptions"/>
    </div>

    <div v-if="open_calendar_modal" class="fixed top-0 right-0 bg-white w-[53dvh] h-[100%] z-[10] shadow-lg p-6">
        <CalendarModalComponents :interview_data="set_interview" @close_modal="open_calendar_modal = false"/>
    </div>

</template>