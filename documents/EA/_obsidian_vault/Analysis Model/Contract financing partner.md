---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model"
domain: "Analysis Model"
element_id: 1881270
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Contract financing partner

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model

## 📝 Notes

Joint Financing Scheme (JFS) partner

Visible only if global parameter ShowJFS = TRUE

LDM source:
If contract is in status Sign and after, system retrieves JFS data from Contract Party Role:

	
- ContractPartyRole = Contract Party Role [Role Type = JFS_PARTNER, Archived = FALSE].
	
- $(PartnerName) = ContractPartyRole -> [Party] Credit Owner.Name. If Credit Owner cannot be found, code of partner is presented instead.
	
- {DEL CLM-683}$(PartnerShare) = ContractPartyRole ->  Contract Party Role Attribute [ Type = JFS_PARTNER_SHARE, Archived = FALSE ].Value
	
- $(PartnerAgreement) = ContractPartyRole -> Contract Party Role Attribute [ Type = JFS_PARTNER_AGREEMENT, Archived = FALSE ].Value{/DEL}

If contract is in status before Sign, system retrieves JFS data from Party:

	
- Party = Party->Relationship.Role = JOINT_LENDER.
	
- $(PartyName) = name of child entity of selected Party


Note: In case there are multiple roles of respective type found on the contract, then each applicable value is displayed on a separate line.


Localization code:
CON_FINPART_Partner

## 📊 Appears In (1 diagrams)

- Custom: Contract detail - header
