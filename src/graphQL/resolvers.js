export default {
  Venue: {
    events: (parent, args, context, info) => db.Events.findAll({where: {venueId: parent.id}, include: [{ all: true, nested: true }]}),
  },
  Event: {
    venue: (parent, args, context, info) => parent.getVenue(),
  },
  Org: {
    events: (parent, args, { db }, info) => db.Events.findAll({where: {orgId: parent.id}, include: [{ all: true, nested: true }]}),
  },
  Query: {
    events: (parent, args, { db }, info) => db.Events.findAll(),
    orgs: (parent, args, { db }, info) => db.Orgs.findAll(),
    contractors: (parent, args, { db }, info) => db.Contractors.findAll(),
    org: (parent, { id }, { db }, info) => db.Orgs.findByPk(id, {include: [
      // { all: true, nested: true }
      {
        model: db.Contractors,
        as: 'contractors'
      }, 
    ]}),
    orgEvents: (parent, { orgId }, { db }, info) => db.Events.findAll({where: {orgId: orgId}, include: [{ all: true, nested: true }], order: [['startTime', 'ASC']]}),
    venueEvents: (parent, { venueId }, { db }, info) => db.Events.findAll({where: {venueId: venueId}, include: [{ all: true, nested: true }]}),
    venues: (parent, args, { db }, info) => db.Venues.findAll(),
    event: (parent, { id }, { db }, info) => db.Events.findByPk(id),
    venue: (parent, { id }, { db }, info) => db.Venues.findByPk(id) 
  },
  Mutation: {
    createContractor: (parent, { orgId, fName, lName, countryCode, phone, email, address1, address2, zip, city, state, contactPrefId, smsConsent, emailConsent, currentTimeZone }, { db }, info) =>
      db.Contractors.create({
        fullName: `${fName} ${lName}`,
        fName: fName,
        lName: lName,
        countryCode: countryCode,
        phone: phone,
        email: email,
        address1: address1,
        address2: address2,
        zip: zip,
        city: city,
        state: state,
        contactPrefId: contactPrefId,
        smsConsent: smsConsent,
        emailConsent: emailConsent,
        currentTimeZone: currentTimeZone,
        orgContractors: [
          { orgId: orgId }
        ]
      }, {
        include: [ {
          model: db.OrgContractors,
          as: 'orgContractors'
        } ]
      }),

    updateContractor: (parent, { id, fName, lName, countryCode, phone, email, address1, address2, zip, city, state, contactPrefId, smsConsent, emailConsent, currentTimeZone }, { db }, info) =>
      db.Contractors.update({
        fullName: `${fName} ${lName}`,
        fName: fName,
        lName: lName,
        countryCode: countryCode,
        phone: phone,
        email: email,
        address1: address1,
        address2: address2,
        zip: zip,
        city: city,
        state: state,
        contactPrefId: contactPrefId,
        smsConsent: smsConsent,
        emailConsent: emailConsent,
        currentTimeZone: currentTimeZone,
        
      }, {
        where: {id: id},
      }),

    createEvent: (parent, { title, description, venueId }, { db }, info) =>
    db.Events.create({
      title: title,
      description: description,
      venueId: venueId
    }),
    updateEvent: (parent, { title, description, venueId, id }, { db }, info) =>
      db.Events.update({
        title: title,
        description: description,
        venueId: venueId
      },
      {
        where: {
          id: id
        }
      }),
    deleteEvent: (parent, {id}, { db }, info) =>
      db.Events.destroy({
        where: {
          id: id
        }
      })
  }
};
