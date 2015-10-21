/**
* Created with the-hacker-society.
* User: lablancas
* Date: 2015-10-21
* Time: 12:06 AM
* To change this template use Tools | Templates.
*/

// TODO: maybe we should put this into a Mongo.Collection
categories = [
    {_id: '1',
     name: 'Find My Towed Vehicle (U)',
     links: [	
        {name: 'Find My Towed Vehicle', url: 'http://findmytowedcar.com/tvrmscitizen/mainpage.aspx'},
    ]},
    {_id: '2',
     name: 'Social Connections',
     links: [	
        {name: 'Facebook', url: 'https://www.facebook.com/Houstonpolice'},
        {name: 'Twitter', url: 'https://twitter.com/houstonpolice'},
        {name: 'YouTube', url: 'https://www.youtube.com/user/houstonpolicedept '},
        {name: 'Podcasts', url: 'http://feeds.feedburner.com/hpdreports '},
        {name: 'Blog', url: 'http://www.hpdblog.com/'},
        {name: 'News Release', url: 'http://www.houstontx.gov/police/news'},
    ]},
    {_id: '3',
     name: 'Jail Inquiry (U)',
     links: [	
        {name: 'Jail Inquiry', url: 'http://mycity.houstontx.gov/jails/'},
    ]},
    {_id: '4',
     name: 'Report Information',
     links: [	
        {name: 'Crime Stoppers', url: 'http://www.crime-stoppers.org/'},
        {name: 'Stop Houston Gangs', url: 'http://www.stophoustongangs.org/'},
        {name: 'Cash for Crooks', url: 'http://www.houstontx.gov/police/cash_for_crooks'},
        {name: 'Online Report', url: 'http://www.houstontx.gov/police/online_report.htm'},
        {name: 'Report Gang Activity', url: 'http://www.houstontx.gov/police/gang/'},
        {name: 'News Release', url: 'http://www.houstontx.gov/police/news'},
        {name: 'iWatch Regional Terrorism Prevention', url: 'http://www.readyhoustontx.gov/iwatchhouston/'},
    ]},
    {_id: '5',
     name: 'Make Complaint / Commend an Officer',
     links: [	
        {name: 'Make a Complaint', url: 'http://www.houstontx.gov/police/contact/iad.htm'},
        {name: 'Commend an Officer – Form', url: 'http://www.houstontx.gov/police/pdfs/Commendation_from_Citizen_Form.pdf'},
    ]},
    {_id: '6',
     name: 'Police Station Phone / Address',
     links: [	
        {name: 'Station Address', url: 'http://www.houstontx.gov/police/substations'},
        {name: 'Police Phone Numbers', url: 'http://www.houstontx.gov/police/phone.htm'},
    ]},
    {_id: '7',
     name: 'Municipal Court Information',
     links: [	
        {name: 'Municipal Court Information', url: 'http://www.houstontx.gov/courts/'},
    ]},
    {_id: '8',
     name: 'Alert Notice',
     links: [	
        {name: 'Alert Notice', url: 'https://ehpd.houstontx.gov/citizenalert/'},
    ]},
    {_id: '9',
     name: 'Resources',
     links: [
        {name: 'Houston Police Explorers', url: 'http://www.houstonpoliceexplorers.com'},
        {name: 'Houston Police Foundation,', url: 'http://www.houstonpolicefoundation.org/'},
        {name: 'Houston Police Retired Officers Association', url: 'http://www.hpdretired.com/'},
        {name: 'Mental Health Division', url: 'http://www.houstontx.gov/police/divisions/mental_health/'},
        {name: '100 Club', url: 'https://www.the100club.org/'},
        {name: 'Remembering the Fallen Officers', url: 'http://www.houstontx.gov/police/fallen_officers/index.htm'},
    ]},
    {_id: '10',
     name: 'Services, Volunteer or Become A Police Officer',
     links: [	
        {name: 'Volunteer Program', url: 'http://www.houstontx.gov/police/vip/'},
        {name: 'PIP', url: 'http://www.houstontx.gov/police/pip/home'},
        {name: 'Victim Services', url: 'http://www.houstontx.gov/police/vsu/'},
        {name: 'Become A Police Officer', url: 'http://www.hpdcareer.com/'},
    ]}
];

Template.showCategories.helpers({
    categories: categories
});

Template.showCategory.helpers({
    links: function() {
        return _.findWhere(categories, {_id: this._id}).links;
    }
});