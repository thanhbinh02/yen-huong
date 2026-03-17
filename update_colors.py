#!/usr/bin/env python3
import os

workspace = "/Users/thanhbinh57kt/Documents/02.Company/yen-huong"
files = [
    "app/gioi-thieu/page.tsx",
    "app/dich-vu/page.tsx",
    "app/su-le/page.tsx",
    "app/tin-tuc/page.tsx",
    "app/tuyen-dung/page.tsx",
    "app/lien-he/page.tsx",
    "app/san-pham/page.tsx",
    "app/san-pham/[slug]/page.tsx",
    "app/layout.tsx",
    "app/page.tsx"
]

replacements = [
    ("text-red-600", "text-primary"),
    ("text-red-700", "text-primary-dark"),
    ("text-red-500", "text-primary-light"),
    ("bg-red-600", "bg-primary"),
    ("bg-red-700", "bg-primary-dark"),
    ("bg-red-500", "bg-primary-light"),
    ("bg-red-50", "bg-[#fff5eb]"),
    ("bg-red-100", "bg-[#ffe8d4]"),
    ("border-red-600", "border-primary"),
    ("border-red-200", "border-[#ffe8d4]"),
    ("from-red-600", "from-primary"),
    ("to-red-700", "to-primary-dark"),
    ("from-red-500", "from-primary-light"),
    ("to-red-600", "to-primary"),
    ("hover:bg-red-700", "hover:bg-primary-dark"),
    ("hover:border-red-600", "hover:border-primary"),
    ("hover:bg-red-50", "hover:bg-[#fff5eb]"),
    ("hover:text-red-600", "hover:text-primary"),
    ("hover:text-red-700", "hover:text-primary-dark"),
]

for file_path in files:
    full_path = os.path.join(workspace, file_path)
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for old, new in replacements:
            content = content.replace(old, new)
        
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Updated: {file_path}")
    else:
        print(f"⚠️  Not found: {file_path}")

print("\n🎉 Đã cập nhật tất cả màu sang #ec8900!")
