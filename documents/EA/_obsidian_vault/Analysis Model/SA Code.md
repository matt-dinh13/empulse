---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model"
domain: "Analysis Model"
element_id: 1881274
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ SA Code

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model

## 📝 Notes

Code of user who arranged the credit application.

LDM source: 
Contract->BusinessEvent[where type = ARRANGE_APPLICATION].ModifiedBy->User

Code of user who sent AF to pre-approval/approval in parenthesis, if different from arranging user. Code will have tooltip MSG_SALES_AGENT_CODE_Tooltip.
LDM: 
- for pre-approval = Contract->BusinessEvent[where type = SUBMIT_PRE].ModifiedBy->User
- for approval = Contract->BusinessEvent[where type = CREATE_CONTRACT].ModifiedBy->User

Localization code: SAL_SalesAgentCode

## 📊 Appears In (1 diagrams)

- Custom: Contract detail - header
