---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19084 (CLM-5221) API to display user name in homer (Single screen communications)"
domain: "Modules"
element_id: 1799444
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CBL-19084 (CLM-5221) API to display user name in homer (Single screen communications)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19084 (CLM-5221) API to display user name in homer (Single screen communications)

## 📝 Notes

This is to accommodate a new item that stores the ident data of the real person who created the communication record via API, i.e. not on the GUI. The application calling with this new item is HCIN's own app called Single screen.
Along with it, several TCK REST API endpoints get versioned up to V2 and one gets merged with another, i.e. gets deleted.

The json structure for the data will be as follows:
"originatedBy" : { 
	"uid": "putri.marliana",
	"employeeNumber": "1611283818",
        "commonName": "Putri Marliana"
}

With commonName included only in GET methods of the relevant endpoints.

## 📊 Appears In (1 diagrams)

- Custom: CBL-19084 (CLM-5221) API to display user name in homer (Single screen communications)
