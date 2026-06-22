---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9292 MFI - Enable Net Monthly income"
domain: "Requirements Model"
element_id: 1752412
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9345 IN - Enable Net income on AF

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9292 MFI - Enable Net Monthly income

## 📝 Notes

As a user I will see field Net income instead of Household income

Solution proposal

	
- create switch displayNetIncomeOnAF
	
- when switch is ON, Net income field (currently not present on any application form) will be visible on all GUI application forms (1SP, 2BoD 2SP) instead of Household Income field
	
- value from Net income field will be mapped and stored to Net income at the back end
	
- change label for this field - Net Monthly Income
	
- these changes are applicable only for GUI, not API
	
- please test, that value is prefilled from PIF for existing customer and sent to LAP

## 🔗 Connections (1)

- → Realisation: [[LOR-9292 MFI - Enable Net Monthly income]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9292 MFI - Enable Net Monthly income
