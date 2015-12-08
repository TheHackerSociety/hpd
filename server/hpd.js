Meteor.startup(function () {
    if (Categories.find().count() === 0) {
        var categoryIndex = [
            {
                name: "Find My Towed Vehicle (U)",
                linkData: [
                    {
                        linkName: "Find My Towed Vehicle",
                        linkUrl: "http://findmytowedcar.com/tvrmscitizen/mainpage.aspx"
                    }
                ]
            },
            {
                name: "Social Connections",
                linkData: [
                    {
                        linkName: "Facebook",
                        linkUrl: "https://www.facebook.com/Houstonpolice"
                    },
                    {
                        linkName: "Twitter",
                        linkUrl: "https://twitter.com/houstonpolice"
                    },
                    {
                        linkName: "YouTube",
                        linkUrl: "https://www.youtube.com/user/houstonpolicedept "
                    },
                    {
                        linkName: "Podcasts",
                        linkUrl: "http://feeds.feedburner.com/hpdreports "
                    },
                    {
                        linkName: "Blog",
                        linkUrl: "http://www.hpdblog.com/"
                    },
                    {
                        linkName: "News Release",
                        linkUrl: "http://www.houstontx.gov/police/news"
                    }
                ]

            },
            {
                name: "Make Complaint / Commend an Officer",
                linkData: [
                    {
                        linkName: "Make a Complaint",
                        linkUrl: "http://www.houstontx.gov/police/contact/iad.htm"
                    },
                    {
                        linkName: "Commend an Officer",
                        linkUrl: "http://www.houstontx.gov/police/pdfs/Commendation_from_Citizen_Form.pdf"
                    }
                ]

            },
            {
                name: "Police Station Phone / Address",
                linkData: [
                    {
                        linkName: "Station Address",
                        linkUrl: "http://www.houstontx.gov/police/substations"
                    },
                    {
                        linkName: "Police Phone Numbers",
                        linkUrl: "http://www.houstontx.gov/police/phone.htm"
                    }
                ]

            },
            {
                name: "Municipal Court Information",
                linkData: [
                    {
                        linkName: "Municipal Court Information",
                        linkUrl: "http://www.houstontx.gov/courts/"
                    }
                ]

            },
            {
                name: "Alert Notice",
                linkData: [
                    {
                        linkName: "Alert Notice",
                        linkUrl: "https://ehpd.houstontx.gov/citizenalert/"
                    }
                ]

            },
            {
                name: "Resources",
                linkData: [
                    {
                        linkName: "Houston Police Exploreres",
                        linkUrl: "http://www.houstonpoliceexplorers.com"
                    },
                    {
                        linkName: "Houston Police Foundation",
                        linkUrl: "http://www.houstonpolicefoundation.org/"
                    },
                    {
                        linkName: "Houston Police Retired Officers Association",
                        linkUrl: "http://www.hpdretired.com/"
                    },
                    {
                        linkName: "Houston Police Exploreres",
                        linkUrl: "https://www.facebook.com/Houstonpolice"
                    },
                    {
                        linkName: "Mental Health Division",
                        linkUrl: "http://www.houstontx.gov/police/divisions/mental_health/"
                    },
                    {
                        linkName: "100 Club",
                        linkUrl: "https://www.the100club.org/"
                    },
                    {
                        linkName: "Remembering the Fallen Officers",
                        linkUrl: "http://www.houstontx.gov/police/fallen_officers/index.htm"
                    }
                ]

            },
            {
                name: "Services, Volunteer or Become a Police Officer",
                linkData: [
                    {
                        linkName: "Volunteer Program",
                        linkUrl: "http://www.houstontx.gov/police/vip/"
                    },
                    {
                        linkName: "PIP",
                        linkUrl: "https://www.facebook.com/Houstonpolice"
                    },
                    {
                        linkName: "Victim Services",
                        linkUrl: "http://www.houstontx.gov/police/pip/home"
                    },
                    {
                        linkName: "Become a Police Officer",
                        linkUrl: "http://www.houstontx.gov/police/vsu/"
                    }
                ]

            }
        ];

        var timestamp = (new Date()).getTime();
        _.each(categoryIndex, function (category) {
            var category_id = Categories.insert({
                name: category.name
            });
            _.each(category.linkData, function (link) {
                Links.insert({
                    categoryId: category_id,
                    name: link.linkName,
                    url: link.linkUrl,
                    createdAt: new Date(timestamp)
                });
                timestamp += 1;     // ensure unique timestamp.
            });
        });
    }
});