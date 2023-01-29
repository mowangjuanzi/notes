# zval 及其使用

## `_zval_struct`

```c
struct _zval_struct {
	zend_value        value;			/* value */
	union {
		uint32_t type_info;
		struct {
			ZEND_ENDIAN_LOHI_3(
				zend_uchar    type,			/* active type */
				zend_uchar    type_flags,
				union {
					uint16_t  extra;        /* not further specified */
				} u)
		} v;
	} u1;
	union {
		uint32_t     next;                 /* hash collision chain */
		uint32_t     cache_slot;           /* cache slot (for RECV_INIT) */
		uint32_t     opline_num;           /* opline number (for FAST_CALL) */
		uint32_t     lineno;               /* line number (for ast nodes) */
		uint32_t     num_args;             /* arguments number for EX(This) */
		uint32_t     fe_pos;               /* foreach position */
		uint32_t     fe_iter_idx;          /* foreach iterator index */
		uint32_t     property_guard;       /* single property guard */
		uint32_t     constant_flags;       /* constant flags */
		uint32_t     extra;                /* not further specified */
	} u2;
};
```

## zend_value

```c
typedef union _zend_value {
	zend_long         lval;				/* long value */
	double            dval;				/* double value */
	zend_refcounted  *counted;
	zend_string      *str;
	zend_array       *arr;
	zend_object      *obj;
	zend_resource    *res;
	zend_reference   *ref;
	zend_ast_ref     *ast;
	zval             *zv;
	void             *ptr;
	zend_class_entry *ce;
	zend_function    *func;
	struct {
		uint32_t w1;
		uint32_t w2;
	} ww;
} zend_value;
```
