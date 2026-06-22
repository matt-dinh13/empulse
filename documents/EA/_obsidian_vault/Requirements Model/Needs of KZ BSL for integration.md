---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)"
domain: "Requirements Model"
element_id: 1820500
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Needs of KZ BSL for integration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)

## 📝 Notes

A list of items needed for integration new COS and VAS modules to KZ BSL

	
- COS_User in KZ LDAP -> https://jira.homecredit.net/jira/browse/CBL-22778
	
- Scripts for upgrade Contract Service and Insurance Contract tables:
-  extend tables: bsl_contract_service, bsl_contract_service_history, bsl_loan_service_request, bsl_loan_service_request_transition with the fields of created_by_employee and updated_by_employee
- extend tables: bsl_contract_service, bsl_contract_service_history with....???
	
- DWH impact in case of change of column name, data type, length. New column, new table is no problem for DWH.
	
- Scripts for data migration:
-  aim mainly for Deal.uuid usage!!
	
- Deploy the last version of the INSR module (needed for VAS Deals)
	
- Replace EOMBillingFinishedSE system with consuming of AccountBalanceChange message -> switch-off it in the KZ BSL
	
- Calling COS - evaluation response even successful and set the correct message box for users
	
- KZ JMS messaging - COS needs to receive CFI in RMQ so some OSB transformation will be needed.

## 📊 Appears In (1 diagrams)

- Custom: CBL-22680 Service Management Modules for REL (KZ)
