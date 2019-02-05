# Resonate

Resource coordination tool for communicating with and booking talent on demand and ahead of time for events.

Resonate allows for mass communication with Contractors, you have a previous working relationship, to coordinate the staffing needs for upcoming and active events. An event coordinator will be able to reach out to all contractors that can fill the variable roles needed for an event, automating the tentative, confirmation, and booking process of the contractors. 

The overall goal of this product is to reduce the man hours associated with contacting and coordinating with event contractors with an initial focus on events of a musical nature.

# Local Development Environment

## Prerequisites

* MySQL Installed and running ([see installation guide](https://mariadb.com/kb/en/library/installing-mariadb-on-macos-using-homebrew/))
* Configure `.env` file (obtain skeleton from Owner of repo)

## Install

Clone from Repo and Access latest Code (Note: Dev is the default branch, Master is what has been released)

```
git@github.com:reactivepixel/Resonate.git
cd Resonate
npm install
```

Install Globals

```
npm i -g nodemon foreman sequelize-cli mysql2
```

## `.env` File

Create a `.env` file on the root level of the repo and configure that file with the following structure and your own information

```json
{
    "TWILIO_ACCOUNT_SID": "",
    "TWILIO_AUTH_TOKEN": "",
    "TWILIO_FROM_NUMBER": "",
    "TWILIO_OWNER_NUMBER": "",
    "DB_LOCAL_DATABASE": "resonate-dev",
    "DB_LOCAL_USER": "",
    "DB_LOCAL_PASSWORD": "",
    "DB_LOCAL_HOST": "localhost",
    "DB_LOCAL_PORT": "3306",
    "NODE_ENV": "development",
    "REACT_APP_PROTOCOL": "http",
    "REACT_APP_CLIENT_HOST": "localhost",
    "PORT": 3000,
}
```

## Run Dev

```
npm run db-clean-local
npm run dev
```

# Routes

## Org

| Route | Path | Component |
|:----|----|----:|
| Org: Dashboard | `/org/:orgId/dashboard`| `/Org/Dashboard`|
| Org: Add| `/org/:orgId/add`| `/Form/Add`|
| Org: Edit | `/org/:orgId/edit`| `/Form/Edit`|
| Org: Delete | `/org/:orgId/delete`| `/Dialog/Confirmation`|


## Events

| Route | Path | Component |
|:----|----|----:|
| Event: Detail | `/org/:orgId/events`| `Events`|
| Event: Detail | `/org/:orgId/events/:eventId/`| `/Event/Detail`|
| Event: Add | `/org/:orgId/events/add`| `/Form/Add`|
| Event: Edit | `/org/:orgId/events/:eventId/edit`| `/Form/Edit`|
| Event: Delete | `/org/:orgId/events/:eventId/delete`| `/Dialog/Confirmation`|


## Contractors
| Route | Path | Component |
|:----|----|----:|
| Contractor: Detail | `/org/:orgId/contractors`| `Contractors`|
| Contractor: Detail | `/org/:orgId/contractors/:contractorId`| `/Form/Add`|
| Contractor: Dashboard | `/org/:orgId/contractors/:contractorId/dashboard`| `/Contractor/Dashboard`|
| Contractor: Messaging | `/org/:orgId/contractors/:contractorId/messages`| `/Contractor/Messages`|
| Contractor: Add | `/org/:orgId/contractors/add`| `/Form/Add`|
| Contractor: Edit | `/org/:orgId/contractors/:contractorId/edit`| `/Form/Edit`|
| Contractor: Delete | `/org/:orgId/contractors/:contractorId/edit`| `/Dialog/Confirm`|

# Feature Groups

* User Hierarchy
  * Super Admin
    * Org
      * Owner
      * Org Manager
        * Event Coordinator
          * Contractor

* Notifications
  * Communications Can be Txt or Email
    * Has Opt-in Confirmation

* Contractor Actions (Talent / Labor)
  * Confirmation State
    * Tentative
    * Confirmed
    * Need to get back to you
    * Active (there now)
  * Full communication history with Manager viewable organized by Event

* Event Management
  * CRUD Events
    * Link to map / address
    * Base Details
      * Description
      * Start Time
      * Expected Duration
      * Roles needed x qty
        * Start Time Offset
        * Expected Duration
        * Allow for Grouping of roles (front of house, back of house, talent)
    * Rental/Equipment Needs?
    * Special Access Badge considerations?
  * Booking
    * Manual
    * Auto
      * Timeout rolling invites to the booking event
  * Communication
    * Can message [event(s)] contractors of a certain [confirmation state]
      * Request Confirmation from Contractors
    * Communication history with each contractor
    * Auto Updates to Attached Contractors based upon event status updates
      * Cancelled
      * Time/Day Change
      * Status Changes
  * Add Contractor
    * Send Confirmation
        * Home Timezone
        * Do Not Disturb hours
    * Set Hourly Pay Scale 
    * Tag as Role (Base guitarist, Violinist, roadie, lighting tech, sound tech)
      * Prioritization/Skill by Role
  * Pay Management
    * Transactions Management of:
      * Contractor
      * Event
  * Event Statuses
    * Dynamic Status [Tentative, Confirmed]
      * Settable to trigger notifications.
  * Event Live Actions
    * Confirm start of gig
    * Confirm end of gig for all
      * Manual end of gig for specific talent or group (roadies go home)
    * Emergency Auto book
      * War dial Rolodex for missing talent

* Calendar
  * List of Events
  * Exportable to .ical file
  * Subscribable?

## API

* Custom API for data CRUD from the back end micro-service.
* Twilio will be employed to send SMS messages.
* Nodemailer, while not an API, will be employed server-side to send emails to users.
