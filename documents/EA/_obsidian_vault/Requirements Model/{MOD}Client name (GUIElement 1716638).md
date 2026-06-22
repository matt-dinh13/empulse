---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC"
domain: "Requirements Model"
element_id: 1716638
diagrams: 4
connections: 1
tags:
  - guielement
  - requirements-model
---

# 🖥️ {MOD}Client name

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC

## 📝 Notes

Concatenated full name of the client whom the communication relates. Data is loaded from CIF. 
For rules of concatenation see Concatenate person name rules.
System calls the rule {ADD CLM-5070} Set link to Client center which sets the element's behavior depending on the result of the rule {/ADD}Select Client center for user.{DEL CLM-5070} If the rule returns CLC_MODULE then value is active link to the screen Client detail in Client center module.
If the rule returns CLC_ERROR then system displays the blank page with the error message MSG_CLC_NOT_AVAILABLE_ON_DOMAIN (i.e. CLC is not available on this domain) elsevalue is active link to Client detail screen.{/DEL}

Read only

Localization code:
COM_ClientName

## 🔗 Connections (1)

- → Dependency: [[{MOD}Select Client center for user]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC
- Custom: CBL-11677 (LM-4295) - Switch internal traffic from SHOP domain to CLC
- Custom: CLM-5070 Remove navigations to CLC on shop domains
- Custom: Show communication record
