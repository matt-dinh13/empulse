---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/Business Rules"
domain: "Analysis Model"
element_id: 1813860
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Search criteria rule for PH

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/Business Rules

## 📝 Notes

{DEL CLM-2782}
One of or combination of following criteria has to be filled in:

	
- Application/Contract number
	
- CUID
	
- (Client’s surname and Birth date) or  (Client’s first name and Birth date)
	
- (Document number and Document type)
	
- Contact type and Contact

{/DEL}
{ADD CLM-2782}
At least one of the following criteria has to be fulfilled:

	
- Contract Number + Date of Birth
	
- CUID + Date of Birth
	
- CUID + Name1 + Name2
	
- Contact Type + Contact + Date of Birth
	
- Contact Type + Contact + Name1+ Name 2
	
- Personal Document Type + Document Number + Date of Birth
	
- Personal Document Type + Document Number + Name1 + Name2
	
- Name1 + Date of Birth
	
- Name2 + Date of Birth

{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Search criteria - Default]]
- → Generalization: [[Rules for Search criteria has to be filled in (Requirement 1813857)]]

## 📊 Appears In (2 diagrams)

- Custom: Search clients
- Custom: Search criteria - PH
