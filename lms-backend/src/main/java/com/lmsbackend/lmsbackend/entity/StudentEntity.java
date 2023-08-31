package com.lmsbackend.lmsbackend.entity;

import com.vladmihalcea.hibernate.type.json.JsonType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "student")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
//@TypeDefs({
//        @TypeDef(name = "json",typeClass = JsonType.class)
//})
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sid",length = 40)
    private int sid;

    @Column(name = "name",length = 50,nullable = false)
    private String name;

    @Column(name = "address",length = 200,nullable = false)
    private String address;

//    @Type(type = "json")
//    @Column(name = "tel",length = 15,nullable = false,columnDefinition = "json")
//    private ArrayList tel;
    @Column(name="tel",length = 15,nullable = false)
    private String tel;

    @Column(name = "nic",length = 15,nullable = false)
    private String nic;
}
