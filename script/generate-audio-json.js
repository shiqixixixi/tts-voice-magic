const fs = require('fs');
const path = require('path');

// 关键：从 script 文件夹向上一级（..）找到项目根目录，再定位到 public/audio
const audioDir = path.join(__dirname, '..', 'public', 'audio'); 
// 输出的 JSON 文件路径：项目根目录/public/audio-files.json
const outputPath = path.join(__dirname, '..', 'public', 'audioFiles.json');

try {
    // 自动创建 public/audio 目录（如果不存在）
    if (!fs.existsSync(audioDir)) {
        fs.mkdirSync(audioDir, { recursive: true });
        console.log('✅ 已自动创建 public/audio 目录');
    }

    // 读取音频文件
    const files = fs.readdirSync(audioDir).filter(file => 
        /\.(mp3|wav|m4a|ogg|flac|wma|aac)$/i.test(file)
    );

    // 生成 JSON 文件
    fs.writeFileSync(outputPath, JSON.stringify(files, null, 2));
    console.log(`✅ 音频文件列表生成成功！共找到 ${files.length} 个文件`);
    if (files.length > 0) console.log('📂 文件：', files.join(', '));

} catch (err) {
    console.error('❌ 生成失败：', err.message);
}