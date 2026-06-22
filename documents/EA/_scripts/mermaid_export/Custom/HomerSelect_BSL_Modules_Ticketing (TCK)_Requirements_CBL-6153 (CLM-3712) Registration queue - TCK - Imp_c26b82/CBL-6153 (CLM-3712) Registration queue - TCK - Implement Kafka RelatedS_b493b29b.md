# CBL-6153 (CLM-3712) Registration queue - TCK - Implement Kafka RelatedSubjectNotification

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-6153 (CLM-3712) Registration queue - TCK - Implement Kafka RelatedSubjectNotification
- **Diagram ID**: 156088
- **Elements**: 8
- **Connectors**: 6

```mermaid
graph TD
    Generate_Related_subject_notification["Generate Related subject notification"]
    n_10_034_Create_related_subject_to_ticket_service["10.034 Create related subject to ticket service"]
    n_10_062_Change_ticket_status_service["10.062 Change ticket status service"]
    n_10_050_Assign_ticket_to_department["10.050 Assign ticket to department"]
    n_10_080_Create_mistake_ticket["10.080 Create mistake ticket"]
    MOD_10_022_Create_ticket_service["{MOD}10.022 Create ticket service"]
    Related_Subject_Notification_RelatedSubject["Related Subject Notification : RelatedSubject"]
    REQ_1_Implement_RelatedSubjectNotification["REQ #1 - Implement RelatedSubjectNotification"]
    n_10_050_Assign_ticket_to_department -->|unnamed| n_10_062_Change_ticket_status_service
    n_10_050_Assign_ticket_to_department -->|unnamed| Generate_Related_subject_notification
    n_10_062_Change_ticket_status_service -->|unnamed| Generate_Related_subject_notification
    n_10_034_Create_related_subject_to_ticket_service -->|unnamed| Generate_Related_subject_notification
    MOD_10_022_Create_ticket_service -->|unnamed| Generate_Related_subject_notification
    n_10_080_Create_mistake_ticket -->|unnamed| MOD_10_022_Create_ticket_service
```
