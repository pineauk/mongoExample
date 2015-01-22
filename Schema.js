Patients = new Mongo.Collection("Patients");
Practitioners = new Mongo.Collection("Practitioners");
Clinics = new Mongo.Collection("Clinics");
Configurations = new Mongo.Collection("Configurations");
SurveyData = new Mongo.Collection("SurveyData");
Tasks = new Mongo.Collection("Tasks");
Sessions = new Mongo.Collection("Sessions");

var Schema = {}

Schema.Patient = new SimpleSchema({
	_id: {
		type: String,
		optional: false
	},
	userID: {
		type: String
	},
	taskList: {
		type: Object
	},
	configList: {
		type: Object
	},
	practitionerList: {
		type: Object
	},
	clinicList: {
		type: Object
	},
})
Schema.Practitioner = new SimpleSchema({
	_id:
	userID:
	taskList:
	configList:
	clinicList:
	patientList:
})
Schema.Clinic = new SimpleSchema({
	_id:
	userID:
	configList:
	patientList:
	practitionerList:
})
Schema.Configuration = new SimpleSchema({
	_id:
	templateConfig:
	dataConfig:
})
Schema.SurveyData = new SimpleSchema({
	_id:
	dataObject:
	dateCompleted:
	userID:
	practitionerID:
})
Schema.Task = new SimpleSchema({
	_id: {
		type: String
	},
	notes: {
		type: String
	},
	creatorID: {
		type: String
	},
	userID: {
		type: String
	},
	dateCreated: {
		type: Date
	},
	dateCompleted: {
		type: Date,
		optional: true
	},
	taskInfo: {
		type: String
	}
})
Schema.taskInfo = new SimpleSchema({
	configID: {
		type: String
	}
})
Schema.Session = new SimpleSchema({
	_id: {
		type: String
	},
	userID: {
		type: String
	},
	dateCreated: {
		type: Date
	},
	configID: {
		type: String
	},
	dataObject: {
		type: Object,
		optional: true
	}
})
Schema.UserCountry = new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String,
        regEx: /^[A-Z]{2}$/
    }
});

Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    organization : {
        type: String,
        regEx: /^[a-z0-9A-z .]{3,30}$/,
        optional: true
    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
    country: {
        type: Schema.UserCountry,
        optional: true
    }
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Note that when using this package, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    }
});



Patients.attachSchema(Schema.Patient);
Meteor.users.attachSchema(Schema.User);