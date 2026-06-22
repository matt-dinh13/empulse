---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/UseCase model"
domain: "Analysis Model"
element_id: 1863719
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Validate Contract Supplement Documents for registration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/UseCase model

## 📝 Notes

{ADD CSI-1122 /}

Validations:

	
- If  document critical mistakes tickets ( where Ticket->TicketPriority = CRITICAL) are not in state 'Canceled' or 'Closed' then system returns error message MSG_DOC_MISTAKES_MUST_BE_CLOSED_CANCELLED.

## 🔗 Connections (2)

- ← Dependency: [[13.270 Register Contract supplement]]
- ← Dependency: [[13.275 Show supplement registration]]

## 📊 Appears In (2 diagrams)

- Use Case: Contract supplement registration
- Use Case: CSI-1122 Use DMS in Contract Supplement registration functions
