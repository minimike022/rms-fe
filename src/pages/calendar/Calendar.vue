<script setup>
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { options } from '@fullcalendar/core/preact.js';
import { INITIAL_EVENTS, createEventId } from './event-utils'
import CalendarModalComponents from '../../components/calendar_components/CalendarModalComponents.vue'

const openCalendarModal = ref(false)
const currentEvents = ref([])

const handleWeekendsToggle = () => {
    calendarOptions.weekends = !calendarOptions.weekends
}

const handleDateSelect = (selectInfo) => {
    // let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar
    openCalendarModal.value = true
    calendarApi.unselect() // clear date selection

    // if (title) {
    //     calendarApi.addEvent({
    //         id: createEventId(),
    //         start: selectInfo.startStr,
    //         end: selectInfo.endStr,
    //         allDay: selectInfo.allDay
    //     })
    // }

    console.log(currentEvents.value)
}

const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
    }
}

const handleEvents = (events) => {
    currentEvents.value = events
    console.log(events)
}


const calendarOptions = ref({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialEvents: INITIAL_EVENTS,
    // events: currentEvents.value,
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

    <div class="fixed top-0 right-0 bg-white w-[50dvh] h-[100%] z-[10] shadow-lg p-6">
        <CalendarModalComponents />
    </div>

</template>