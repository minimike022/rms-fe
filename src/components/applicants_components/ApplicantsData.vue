<script setup>
</script>
<template>
    <!-- Header -->
    <div>
            <h1>Applicants Data</h1>
            <table class="">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Birthday</th>
                        <th>Age</th>
                        <th>Present Address</th>
                        <th>Position</th>
                        <th>Highest Education</th>
                        <th>School Name</th>
                    </tr>
                </thead>
                <tbody v-for="app_data in applicants_data">
                    <tr>
                        <td>{{  app_data.first_name }} {{  app_data.last_name }} {{  app_data.extension_name }}</td>
                        <td>{{  app_data.birthdate }} </td>
                        <td>{{  app_data.age }} </td>
                        <td>{{  app_data.present_address }} </td>
                        <td>{{  app_data.position_name }} </td>
                        <td>{{  app_data.highest_education }} </td>
                        <td>{{  app_data.school_name }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>