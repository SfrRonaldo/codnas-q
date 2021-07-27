package codnas.q.service.core.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cluster")
public class Cluster {
    @Id
    @Column
    private Integer cluster_id;

    @Column
    private String codnasq_id;

    @Column
    private String oligomeric_state;

    @Column
    private Double max_rmsd_tertiary;

    @Column
    private String cluster_group;

    @Column
    private String created_at;

    @Column
    private String updated_at;

    @Column
    private Double max_rmsd_quaternary;
}