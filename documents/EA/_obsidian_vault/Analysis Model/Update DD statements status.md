---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753486
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Update DD statements status

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

For each parsed DD statement:

	
- 
	
- Find corresponding DD statement record (DIRECT_DEBIT_STATEMENT) using Find corresponding DD statement algorithm (see 2.10.1.3Find corresponding DD statement)
	
- If value of XML element debited is true
- Set DD statement status (DIRECT_DEBIT_STATEMENT.STATUS) to “debited"
	
- Else
- Set DD statement status (DIRECT_DEBIT_STATEMENT.STATUS) to “undebited”
	
- If previous status of DD statement wasn't "posted", then system will write information about rewrite of result to system log (date and time of rewrite, original result, new result)
	
- Set DD statement reason code (DIRECT_DEBIT_STATEMENT.ERROR_REASON_CODE) as value from XML element reasonCode.




Historization:
History of changes in direct debit statements will be hold in system. When one DDS will be updated multiple times, then it will be possible to find all formerly valid values in database.

## 🔗 Connections (2)

- → Dependency: [[Find corresponding DD statement]]
- ← Dependency: [[05.260 Process DD confirmations import (UseCase 1863211)]]

## 📊 Appears In (2 diagrams)

- Use Case: Automatic import DD statements and confirmations
- Use Case: Direct Debit statements
