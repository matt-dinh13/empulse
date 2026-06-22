# Blocking & Unblocking card

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Use case
- **Diagram ID**: 161440
- **Elements**: 14
- **Connectors**: 15

```mermaid
graph LR
    Create_communication_Create_communication["Create communication : Create communication"]
    n_07_041_Create_communication_record(("07.041 Create communication record"))
    CardBlockWS_CardBlockWS_UnblockCard["CardBlockWS : CardBlockWS.UnblockCard"]
    CardBlockWS_CardBlockWS_BlockCard["CardBlockWS : CardBlockWS.BlockCard"]
    CardRetirementWS_CardRetirementWS_StolenCard["CardRetirementWS : CardRetirementWS.StolenCard"]
    CardRetirementWS_CardRetirementWS_LostCard["CardRetirementWS : CardRetirementWS.LostCard"]
    CardBlockWS_CardBlockWS_GetAllowedCardBlockOperationsForUser["CardBlockWS : CardBlockWS.GetAllowedCardBlockOperationsForUser"]
    Block_Unblock_Card_availability_rule["Block/Unblock Card availability rule"]
    CaBus_CMS[/"CaBus-CMS"/]
    User_interface_Card_block_unblock["User interface : Card block/unblock"]
    n_12_540_Card_blocking_overview(("12.540 Card blocking overview"))
    User[/"User"/]
    n_12_505_Unblock_card(("12.505 Unblock card"))
    n_12_504_Block_card(("12.504 Block card"))
    Create_communication_Create_communication -->|unnamed| n_07_041_Create_communication_record
    n_12_504_Block_card -.->|include| n_07_041_Create_communication_record
    CardBlockWS_CardBlockWS_BlockCard -->|unnamed| n_12_504_Block_card
    CardRetirementWS_CardRetirementWS_StolenCard -->|unnamed| n_12_504_Block_card
    CardRetirementWS_CardRetirementWS_LostCard -->|unnamed| n_12_504_Block_card
    CardBlockWS_CardBlockWS_UnblockCard -->|unnamed| n_12_505_Unblock_card
    User_interface_Card_block_unblock -->|unnamed| n_12_540_Card_blocking_overview
    CardBlockWS_CardBlockWS_GetAllowedCardBlockOperationsForUser -->|unnamed| n_12_540_Card_blocking_overview
    n_12_505_Unblock_card --- CaBus_CMS
    n_12_540_Card_blocking_overview --> CaBus_CMS
    n_12_504_Block_card --- CaBus_CMS
    n_12_540_Card_blocking_overview -->|unnamed| Block_Unblock_Card_availability_rule
    User --- n_12_505_Unblock_card
    User --- n_12_504_Block_card
    User --> n_12_540_Card_blocking_overview
```
