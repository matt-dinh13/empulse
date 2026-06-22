---
type: Requirement
stereotype: "Business Rule"
package: ""
domain: "_Uncategorized"
element_id: 816075
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Partner activation rules - PH

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: N/A

## 📝 Notes

This is a variant specific rule.
In order to activate a partner, the following conditions must be met:

	
- At least one address with Address type = "Registration address"; MSG_0054
	
- Bank account set for receiving payments = TRUE; MSG_0129
	
- One Contact person of type = "Company director"; MSG_0130
	
- One Contact person of type = "Contact person"; MSG_0017
	
- Business area <> null; MSG_0131
	
- District sales manager <> null; MSG_0132
	
- Group partner number <> null; MSG_0133
	
- Risk security check = True; MSG_0134
	
- Tax Identification number <> null; MSG_MSG_INVALID_TAX_IDENTIFICATOR_NUMBER
	
- At least one of PAN number or Licence Number must be filled in; MSG_0305
	
- Contract sign date <= "current date"; MSG_0003


On error particular message is displayed.

## 🔗 Connections (1)

- → Generalization: [[Partner activation rules]]
