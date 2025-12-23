package com.example.webgroup24.dao;

import com.example.webgroup24.model.Brand;
import org.jdbi.v3.core.Jdbi;

public class BrandDao {
    private Jdbi jdbi = DatabaseDao.get();

    public Brand getBrandByProductId(int pid) {
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT b.* " +
                                "FROM products p " +
                                "JOIN brands b ON p.brand_id = b.id " +
                                "WHERE p.id = :pid")
                        .bind("pid", pid)
                        .mapToBean(Brand.class)
                        .findOne()
                        .orElse(null) // Lấy giá trị hoặc trả về null nếu không thấy
        );
    }
}
