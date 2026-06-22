---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/User Interface Model"
domain: "Analysis Model"
element_id: 1590833
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Search results

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application cancellation configuration/User Interface Model

## 📝 Notes

Grid containing the results of application cancellation configuration search (found records of Application Cancellation Configuration are used as a data source).

Other:

	
- Paging of the grid is enabled (number of records per page is defined by global parameter DefaultMaxNumberOfResults).


	
- Grid is initially hidden until some search is performed (see the superior use case for more detail).
	
- Grid is initially sorted by:
- Application Status ascending,
- Application SubStatus ascending,
- Application Type ascending,
- Product Profile Code ascending (records with null value are displayed first).


	
- Grid is sortable by user.


Localization code:
GEN_SearchResults

## 📊 Appears In (1 diagrams)

- Custom: Search for application cancellation configuration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Application Status | text |  |
| Application SubStatus | text |  |
| Application Type | text |  |
| Application Creation Channel | text |  |
| Product Profile Code | text |  |
| Cancellation Period Starting Moment | text |  |
| Cancellation Period Length | int |  |
| Cancellation Reason | text |  |
| Detail | icon |  |
| Update | icon |  |
| Deactivate | icon |  |
