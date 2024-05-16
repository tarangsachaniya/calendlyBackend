import { CollectionConfig } from "payload/types";

const Scheludes: CollectionConfig = {
  slug: "schedules",
  admin: {
    useAsTitle: "user",
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
    },
    {
      type: "row",
      fields: [
        {
          name: "day",
          type: "date",
          required: true,
        },
        {
          name: "dayStart",
          type: "date",
          required: true,
        },
        {   
          name: "dayEnd",
          type: "date",
          required: true,
        },
        {
          name: "eventDuration",
          type: "date",
          required: true,
        },
      ],
    },

    {
      name: "events",
      type: "array",
      fields: [
        {
          name: "event",
          type: "relationship",
          relationTo: "events",
        },
      ],
    },
  ],
};

export default Scheludes;
