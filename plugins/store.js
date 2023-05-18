import Vue from 'vue'

/**
 * @description This is a store for the application. It is used to store the state of the application.
 */
export const store = Vue.observable({
  state: {
    title: 'chatSystem',
    collapsedFlag: false,
    users: [
      {
        name: 'John Doe', role: 'agent', location: 'home', department: 'd2', status: 'onBreak'
      },
      {
        name: 'Jane Doe', role: 'TL', location: 'office', department: 'd1', status: 'troubleshooting'
      },
      {
        name: 'John Doe', role: 'IT', location: 'home', department: 'd1', status: 'inMeeting'
      },
      {
        name: 'Jane Doe', role: 'agent', location: 'office', department: 'd2', status: 'troubleshooting'
      },
      {
        name: 'John Doe', role: 'manager', location: 'home', department: 'd3', status: 'inMeeting'
      },
      {
        name: 'Jane Doe', role: 'IT', location: 'office', department: 'd3', status: 'troubleshooting'
      },
      {
        name: 'Jane Doe', role: 'TL', location: 'office', department: 'd1', status: 'troubleshooting'
      },
      {
        name: 'John Doe', role: 'IT', location: 'home', department: 'd1', status: 'inMeeting'
      },
      {
        name: 'Dorothy Doe', role: 'agent', location: 'office', department: 'd2', status: 'troubleshooting'
      },
      {
        name: 'George Doe', role: 'manager', location: 'home', department: 'd3', status: 'inMeeting'
      },
      {
        name: 'Jane Doe', role: 'IT', location: 'office', department: 'd3', status: 'troubleshooting'
      },
      {
        name: 'Jane Doe', role: 'TL', location: 'office', department: 'd1', status: 'troubleshooting'
      },
      {
        name: 'John Doe', role: 'IT', location: 'home', department: 'd1', status: 'inMeeting'
      },
      {
        name: 'Dorothy Doe', role: 'agent', location: 'office', department: 'd2', status: 'troubleshooting'
      },
      {
        name: 'George Doe', role: 'manager', location: 'home', department: 'd3', status: 'inMeeting'
      },
      {
        name: 'Jane Doe', role: 'IT', location: 'office', department: 'd3', status: 'troubleshooting'
      }
    ]
  }
})
