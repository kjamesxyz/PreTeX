var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "biostats-notes-1-1",
  "level": "1",
  "url": "biostats-notes-1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to Probabiliy",
  "body": " Introduction to Probabiliy   In this chapter, we cover basic vocabulary and concpets from probability and statistics. The purpose of this unit is primarily to establish notation and convention.     In probability & statistics, we call procedures with measureable outcomes experiments .      An event is any collection of results or outcomes of a procedure. When that event cannot be broken down into further logical components, we call the event simple . Otherwise, that event is called compound .      The sample space for an experiment is the collection of all possible simple events.      Let be an event from an expermient with simple events. The probability of occuring is given by       Consider the experiment of rolling a fair 6-sided die. Find three distinct events such that                           Let be events. Then       Verify the addition rule by comparing regions in a Venn diagram.      Two events are disjoint (mutually exclusive) if they cannot occur simultaneously.      Show that if is disjoint from , then       Consider the experiment of rolling a fair 6-sided die and recording the result. Let be the event we roll a 1. Let be the event we roll less than 3.     Compute .      Is disjoint from ?      Find an event that is disjoint from , but not from .      Compute .      Compute .     "
},
{
  "id": "def-experiment",
  "level": "2",
  "url": "biostats-notes-1-1.html#def-experiment",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  In probability & statistics, we call procedures with measureable outcomes experiments .   "
},
{
  "id": "def-event",
  "level": "2",
  "url": "biostats-notes-1-1.html#def-event",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  An event is any collection of results or outcomes of a procedure. When that event cannot be broken down into further logical components, we call the event simple . Otherwise, that event is called compound .   "
},
{
  "id": "def-sample-space",
  "level": "2",
  "url": "biostats-notes-1-1.html#def-sample-space",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  The sample space for an experiment is the collection of all possible simple events.   "
},
{
  "id": "def-probability",
  "level": "2",
  "url": "biostats-notes-1-1.html#def-probability",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  Let be an event from an expermient with simple events. The probability of occuring is given by    "
},
{
  "id": "biostats-notes-1-1-7",
  "level": "2",
  "url": "biostats-notes-1-1.html#biostats-notes-1-1-7",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "",
  "body": "  Consider the experiment of rolling a fair 6-sided die. Find three distinct events such that                        "
},
{
  "id": "thm-addition-rule",
  "level": "2",
  "url": "biostats-notes-1-1.html#thm-addition-rule",
  "type": "Theorem",
  "number": "1.1.6",
  "title": "",
  "body": "  Let be events. Then    "
},
{
  "id": "biostats-notes-1-1-9",
  "level": "2",
  "url": "biostats-notes-1-1.html#biostats-notes-1-1-9",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "",
  "body": "  Verify the addition rule by comparing regions in a Venn diagram.   "
},
{
  "id": "def-disjoint",
  "level": "2",
  "url": "biostats-notes-1-1.html#def-disjoint",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": "  Two events are disjoint (mutually exclusive) if they cannot occur simultaneously.   "
},
{
  "id": "biostats-notes-1-1-11",
  "level": "2",
  "url": "biostats-notes-1-1.html#biostats-notes-1-1-11",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "",
  "body": "  Show that if is disjoint from , then    "
},
{
  "id": "biostats-notes-1-1-12",
  "level": "2",
  "url": "biostats-notes-1-1.html#biostats-notes-1-1-12",
  "type": "Checkpoint",
  "number": "1.1.10",
  "title": "",
  "body": "  Consider the experiment of rolling a fair 6-sided die and recording the result. Let be the event we roll a 1. Let be the event we roll less than 3.     Compute .      Is disjoint from ?      Find an event that is disjoint from , but not from .      Compute .      Compute .    "
},
{
  "id": "biostats-notes-1-2",
  "level": "1",
  "url": "biostats-notes-1-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Introduction to Statistics",
  "body": " Introduction to Statistics   Students will be able to...   Students will be able to...    Distinguish between populations and samples.  Distinguish between quantiative and qualitative.  Identify a datum's level of measurement.    "
},
{
  "id": "biostats-notes-1-2-2",
  "level": "2",
  "url": "biostats-notes-1-2.html#biostats-notes-1-2-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "Students will be able to...",
  "body": " Students will be able to...   Students will be able to...    Distinguish between populations and samples.  Distinguish between quantiative and qualitative.  Identify a datum's level of measurement.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
