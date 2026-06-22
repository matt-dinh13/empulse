---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8338 (CLM-2563) Client detail - List of ticket optimization"
domain: "Requirements Model"
element_id: 1459070
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - migration ticketing data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8338 (CLM-2563) Client detail - List of ticket optimization

## 📝 Notes

Add contract and client as new related objects for all tickets with Communication as related object (if related contract or client does not exist).

One time migration.

Proposed script:

1/ get list of ticket with Communication as related object without person

select rscom.code as communication_id, t.id as ticket_id,  cl.cuid from TCK.TCK_TICKET t
join TCK.TCK_RELATED_SUBJECT rscom on rscom.ticket_id=t.id and rscom.type='COMMUNICATION_RECORD'
left join TCK.TCK_RELATED_SUBJECT rscust on rscust.ticket_id=t.id and rscust.type='CUSTOMER'
join HO.BSL_COMMUNICATION_RECORD comrec on TO_CHAR(comrec.id)=rscom.code
join HO.BSL_CONTRACT c on c.id=comrec.contract_id
join ho.bsl_client_snapshot cs on cs.id=c.client_snapshot_id
join ho.bsl_client cl on cl.id=cs.client_id
where rscust.id is null;

2/ insert TCK.RelatedObject to CUSTOMER + CUID for all records

3/ get list of ticket with Communication as related object without Contract

select rscom.code as communication_id, t.id as ticket_id, c.contract_code from TCK.TCK_TICKET t
join TCK.TCK_RELATED_SUBJECT rscom on rscom.ticket_id=t.id and rscom.type='COMMUNICATION_RECORD'
left join TCK.TCK_RELATED_SUBJECT rscon on rscon.ticket_id=t.id and rscust.type='CONTRACT'
join HO.BSL_COMMUNICATION_RECORD comrec on TO_CHAR(comrec.id)=rscom.code
join HO.BSL_CONTRACT c on c.id=comrec.contract_id
where rscon.id is null;

4/ insert TCK.RelatedObject to CONTRACT + ContractCode for all records

## 📊 Appears In (1 diagrams)

- Custom: CBL-8338 (CLM-2563) Client detail - List of ticket optimization
