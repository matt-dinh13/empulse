---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-91 (CBL-27) Switch on/off services during card lifecycle"
domain: "Requirements Model"
element_id: 1270871
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-27 Switch on/off services during card lifecycle

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-91 (CBL-27) Switch on/off services during card lifecycle

## 📝 Notes

Business objective: 
Target of this requirement is to provide functionality for switch on/off one or all services related to REL accounts/cards on contract level.

 To manage properly and effectively lifecycle of card holders, system has to have ability to switch on/off REL account and credit card related services (insurance, direct debit, SMS notification, etc.) on contract level any time. This functionality will help to the customer manage the services in time and have setup the correct features. Such functionality will also help CRM and portfolio management to control revenue stream of cards. 
There will be a possibility to switch on/off this functionality via settings accessible via Service setting menu, through call center, mobile app or internet banking.
System will log switch on/off the service, information should be visible in BSL and accessible for reporting in DWH.
Service configuration will contain following additional settings:

	
- if it is possible to switch the service on and off or not
	
- selection of effective day of switching the service on and off (separately)

	
- immediate
	
- following calendar day
	
- following working day
	
- next billing cycle



	
- rules for charging a fee for the service

	
- charge when the service was on for whole billing cycle
	
- charge when service was on at least once during billing cycle
	
- charge when service is on at the moment of EOC

## 📊 Appears In (1 diagrams)

- Custom: CLM-91 (CBL-27) Switch on/off services during card lifecycle
