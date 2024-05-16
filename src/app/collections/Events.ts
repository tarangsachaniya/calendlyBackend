import { CollectionConfig } from "payload/types";
const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "eventName",
  },
  fields: [
    {
      name: "inviteeEmail",
      type: "email",
      required: true,
    },
    {
      name:"eventType",
      type:"relationship",
      relationTo:"events"
    },
    {
      type: "row",
      fields: [
        {
          name: "mentorId",
          type: "relationship",
          relationTo: "users",
        },
        {
          name: "schedule",
          type: "relationship",
          relationTo: "schedules",
        },
      ],
    },

    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      type:"row",
      fields:[
            {
                  name: "day",
                  type: "date",
                  required: true,
                },
                {
                  name: "start",
                  type: "date",
                  required: true,
                },
                {
                  name: "end",
                  type: "date",
                  required: true,
                },
      ]
    },
    
  ],
};

export default Events;
