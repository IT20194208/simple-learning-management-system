package com.lmsbackend.lmsbackend.dto;

import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import java.util.ArrayList;
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class StudentDto {

    private int sid;
    private String name;
    private String address;
    private String tel;
    private String nic;

}
