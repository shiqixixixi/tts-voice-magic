let selectedFile = null;
let currentInputMethod = 'text'; // 'text' or 'file'
let currentMode = 'tts'; // 'tts' or 'transcription'
let selectedAudioFile = null;
let transcriptionToken = null;
let currentLanguage = 'en'; // 默认语言

// 国际化翻译数据
const translations = {
    en: {
        'page.title': 'VoiceCraft - AI-Powered Voice Processing Platform',
        'page.description': 'VoiceCraft is an AI-powered platform that converts text to speech and speech to text with 20+ voice options, lightning fast processing, completely free to use.',
        'page.keywords': 'text to speech,AI voice synthesis,online TTS,voice generator,free voice tools,speech to text,voice transcription',
        'lang.current': 'English',
        'lang.en': 'English',
        'lang.zh': '中文',
        'lang.ja': '日本語',
        'lang.ko': '한국어',
        'lang.es': 'Español',
        'lang.fr': 'Français',
        'lang.de': 'Deutsch',
        'lang.ru': 'Русский',
        'header.title': 'VoiceCraft',
        'header.subtitle': 'AI-Powered Voice Processing Platform',
        'header.feature1': '20+ Voice Options',
        'header.feature2': 'Lightning Fast',
        'header.feature3': 'Completely Free',
        'header.feature4': 'Download Support',
        'mode.tts': 'Text to Speech',
        'mode.transcription': 'Speech to Text'
    },
    zh: {
        'page.title': 'VoiceCraft - AI驱动的语音处理平台',
        'page.description': 'VoiceCraft是一个AI驱动的平台，支持文字转语音和语音转文字，拥有20+种语音选项，闪电般的处理速度，完全免费使用。',
        'page.keywords': '文字转语音,AI语音合成,在线TTS,语音生成器,免费语音工具,语音转文字,语音转录',
        'lang.current': '中文',
        'lang.en': 'English',
        'lang.zh': '中文',
        'lang.ja': '日本語',
        'lang.ko': '한국어',
        'lang.es': 'Español',
        'lang.fr': 'Français',
        'lang.de': 'Deutsch',
        'lang.ru': 'Русский',
        'header.title': 'VoiceCraft',
        'header.subtitle': 'AI驱动的语音处理平台',
        'header.feature1': '20+种语音选项',
        'header.feature2': '闪电般快速',
        'header.feature3': '完全免费',
        'header.feature4': '支持下载',
        'mode.tts': '文字转语音',
        'mode.transcription': '语音转文字'
    },
    ja: {
        'page.title': 'VoiceCraft - AI音声処理プラットフォーム',
        'page.description': 'VoiceCraftはAI駆動のプラットフォームで、テキスト読み上げと音声テキスト変換に対応。20以上の音声オプション、高速処理、完全無料でご利用いただけます。',
        'page.keywords': 'テキスト読み上げ,AI音声合成,オンラインTTS,音声ジェネレーター,無料音声ツール,音声テキスト変換,音声転写',
        'lang.current': '日本語',
        'lang.en': 'English',
        'lang.zh': '中文',
        'lang.ja': '日本語',
        'lang.ko': '한국어',
        'lang.es': 'Español',
        'lang.fr': 'Français',
        'lang.de': 'Deutsch',
        'lang.ru': 'Русский',
        'header.title': 'VoiceCraft',
        'header.subtitle': 'AI音声処理プラットフォーム',
        'header.feature1': '20以上の音声オプション',
        'header.feature2': '高速処理',
        'header.feature3': '完全無料',
        'header.feature4': 'ダウンロード対応',
        'mode.tts': 'テキスト読み上げ',
        'mode.transcription': '音声テキスト変換'
    },
    ko: {
        'page.title': 'VoiceCraft - AI 음성 처리 플랫폼',
        'page.description': 'VoiceCraft는 AI 기반 플랫폼으로 텍스트 음성 변환과 음성 텍스트 변환을 지원합니다. 20개 이상의 음성 옵션, 빠른 처리 속도, 완전 무료로 이용하실 수 있습니다.',
        'page.keywords': '텍스트 음성 변환,AI 음성 합성,온라인 TTS,음성 생성기,무료 음성 도구,음성 텍스트 변환,음성 전사',
        'lang.current': '한국어',
        'lang.en': 'English',
        'lang.zh': '中文',
        'lang.ja': '日本語',
        'lang.ko': '한국어',
        'lang.es': 'Español',
        'lang.fr': 'Français',
        'lang.de': 'Deutsch',
        'lang.ru': 'Русский',
        'header.title': 'VoiceCraft',
        'header.subtitle': 'AI 음성 처리 플랫폼',
        'header.feature1': '20개 이상의 음성 옵션',
        'header.feature2': '빠른 처리',
        'header.feature3': '완전 무료',
        'header.feature4': '다운로드 지원',
        'mode.tts': '텍스트 음성 변환',
        'mode.transcription': '음성 텍스트 변환'
    },
    es: {
        'page.title': 'VoiceCraft - Plataforma de Procesamiento de Voz con IA',
        'page.description': 'VoiceCraft es una plataforma impulsada por IA que convierte texto a voz y voz a texto con más de 20 opciones de voz, procesamiento ultrarrápido, completamente gratis.',
        'page.keywords': 'texto a voz,síntesis de voz IA,TTS en línea,generador de voz,herramientas de voz gratis,voz a texto,transcripción de voz',
        'lang.current': 'Español',
        'lang.en': 'English',
        'lang.zh': '中文',
        'lang.ja': '日本語',
        'lang.ko': '한국어',
        'lang.es': 'Español',
        'lang.fr': 'Français',
        'lang.de': 'Deutsch',
        'lang.ru': 'Русский',
        'header.title': 'VoiceCraft',
        'header.subtitle': 'Plataforma de Procesamiento de Voz con IA',
        'header.feature1': 'Más de 20 Opciones de Voz',
        'header.feature2': 'Ultrarrápido',
        'header.feature3': 'Completamente Gratis',
        'header.feature4': 'Soporte de Descarga',
        'mode.tts': 'Texto a Voz',
        'mode.transcription': 'Voz a Texto'
    },
    fr: {
        'page.title': 'VoiceCraft - Plateforme de Traitement Vocal IA',
        'page.description': 'VoiceCraft est une plateforme alimentée par IA qui convertit le texte en parole et la parole en texte avec plus de 20 options vocales, traitement ultra-rapide, entièrement gratuit.',
        'page.keywords': 'texte vers parole,synthèse vocale IA,TTS en ligne,générateur vocal,outils vocaux gratuits,parole vers texte,transcription vocale',
        'lang.current': 'Français',
        'lang.en': 'English',
        'lang.zh': '中文',
        'lang.ja': '日本語',
        'lang.ko': '한국어',
        'lang.es': 'Español',
        'lang.fr': 'Français',
        'lang.de': 'Deutsch',
        'lang.ru': 'Русский',
        'header.title': 'VoiceCraft',
        'header.subtitle': 'Plateforme de Traitement Vocal IA',
        'header.feature1': 'Plus de 20 Options Vocales',
        'header.feature2': 'Ultra-rapide',
        'header.feature3': 'Entièrement Gratuit',
        'header.feature4': 'Support de Téléchargement',
        'mode.tts': 'Texte vers Parole',
        'mode.transcription': 'Parole vers Texte'
    },
    de: {
        'page.title': 'VoiceCraft - KI-gestützte Sprachverarbeitungsplattform',
        'page.description': 'VoiceCraft ist eine KI-gestützte Plattform, die Text in Sprache und Sprache in Text umwandelt, mit über 20 Sprachoptionen, blitzschneller Verarbeitung, völlig kostenlos.',
        'page.keywords': 'Text zu Sprache,KI-Sprachsynthese,Online-TTS,Sprachgenerator,kostenlose Sprachtools,Sprache zu Text,Sprachtranskription',
        'lang.current': 'Deutsch',
        'lang.en': 'English',
        'lang.zh': '中文',
        'lang.ja': '日本語',
        'lang.ko': '한국어',
        'lang.es': 'Español',
        'lang.fr': 'Français',
        'lang.de': 'Deutsch',
        'lang.ru': 'Русский',
        'header.title': 'VoiceCraft',
        'header.subtitle': 'KI-gestützte Sprachverarbeitungsplattform',
        'header.feature1': 'Über 20 Sprachoptionen',
        'header.feature2': 'Blitzschnell',
        'header.feature3': 'Völlig Kostenlos',
        'header.feature4': 'Download-Unterstützung',
        'mode.tts': 'Text zu Sprache',
        'mode.transcription': 'Sprache zu Text'
    },
    ru: {
        'page.title': 'VoiceCraft - ИИ-платформа обработки голоса',
        'page.description': 'VoiceCraft - это платформа на базе ИИ, которая преобразует текст в речь и речь в текст с более чем 20 голосовыми опциями, молниеносной обработкой, совершенно бесплатно.',
        'page.keywords': 'текст в речь,ИИ синтез речи,онлайн TTS,генератор голоса,бесплатные голосовые инструменты,речь в текст,транскрипция речи',
        'lang.current': 'Русский',
        'lang.en': 'English',
        'lang.zh': '中文',
        'lang.ja': '日本語',
        'lang.ko': '한국어',
        'lang.es': 'Español',
        'lang.fr': 'Français',
        'lang.de': 'Deutsch',
        'lang.ru': 'Русский',
        'header.title': 'VoiceCraft',
        'header.subtitle': 'ИИ-платформа обработки голоса',
        'header.feature1': 'Более 20 голосовых опций',
        'header.feature2': 'Молниеносно',
        'header.feature3': 'Совершенно Бесплатно',
        'header.feature4': 'Поддержка Загрузки',
        'mode.tts': 'Текст в Речь',
        'mode.transcription': 'Речь в Текст'
    }
};

// 国际化功能
function detectLanguage() {
    // 检测浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = browserLang.split('-')[0];

    // 检查是否支持该语言
    if (translations[shortLang]) {
        return shortLang;
    }

    // 默认返回英语
    return 'en';
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('voicecraft-language', lang);

    // 更新页面语言属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

    // 应用翻译
    applyTranslations();

    // 更新语言切换器
    updateLanguageSwitcher();
}

function applyTranslations() {
    const langData = translations[currentLanguage];

    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });

    // 更新 meta 标签
    document.querySelectorAll('[data-i18n-content]').forEach(element => {
        const key = element.getAttribute('data-i18n-content');
        if (langData[key]) {
            element.setAttribute('content', langData[key]);
        }
    });

    // 更新页面标题
    if (langData['page.title']) {
        document.title = langData['page.title'];
    }
}

function updateLanguageSwitcher() {
    const langFlags = {
        'en': '🇺🇸',
        'zh': '🇨🇳',
        'ja': '🇯🇵',
        'ko': '🇰🇷',
        'es': '🇪🇸',
        'fr': '🇫🇷',
        'de': '🇩🇪',
        'ru': '🇷🇺'
    };

    const langData = translations[currentLanguage];
    document.getElementById('currentLangFlag').textContent = langFlags[currentLanguage];
    document.getElementById('currentLangName').textContent = langData['lang.current'];

    // 更新选中状态
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === currentLanguage) {
            option.classList.add('active');
        }
    });
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function () {
    // 初始化国际化
    initializeI18n();

    // 初始化背景音乐列表
    loadLocalBackgroundMusic();

    // 初始化其他功能
    initializeInputMethodTabs();
    initializeFileUpload();
    initializeModeSwitcher();
    initializeAudioUpload();
    initializeTokenConfig();
    initializeLanguageSwitcher();
});

// 从本地audio文件夹加载背景音乐（选项value不含/audio前缀）
async function loadLocalBackgroundMusic() {
    try {
        // 尝试读取audio文件夹中的文件（请求路径仍为audio/，保持不变）
        const response = await fetch('audio/');
        if (response.ok) {
            const text = await response.text();

            // 使用正则表达式提取文件名（关键：只取href中的文件名部分，去掉/audio/前缀）
            // 适配两种href格式："1.mp3" 或 "/audio/1.mp3"，最终都提取为 "1.mp3"
            const fileRegex = /href="(?:\/audio\/)?([^"]+)"/g;
            const backgroundMusicSelect = document.getElementById('backgroundMusic');

            // 保存原有选项（保留无背景音乐和自定义音乐）
            const originalOptions = Array.from(backgroundMusicSelect.options).filter(option =>
                option.value === 'musicnone' || option.value === 'custom'
            );

            // 清空选择框（先注释掉的代码恢复，避免重复添加原有选项）
            backgroundMusicSelect.innerHTML = '';
            backgroundMusicSelect.append(...originalOptions);

            let match;
            const addedFiles = new Set();
            const audioExtensions = /\.(mp3|wav|m4a|ogg|flac|wma|aac|mp4)$/i;

            // 匹配所有文件名并添加到选择列表
            while ((match = fileRegex.exec(text)) !== null) {
                // 取捕获组1：已自动去掉/audio/前缀的纯文件名（如 "1.mp3"）
                const fileName = match[1];

                // 只添加音频文件，避免添加目录和系统文件
                if (/\.(mp3|wav|m4a|ogg|flac|wma|aac|mp4)$/i.test(fileName) &&
                    !fileName.startsWith('.') &&
                    !addedFiles.has(fileName)) {

                    // 移除文件扩展名作为显示名称
                    const displayName = fileName.replace(/\.[^/.]+$/, '');
                    const option = document.createElement('option');
                    // 关键：value仅拼接"local_"和纯文件名，不含/audio
                    option.value = `local_${encodeURIComponent(fileName)}`;
                    option.textContent = `🎵${displayName}`;

                    // 添加到选择列表，放在自定义音乐选项之前
                    const customOption = backgroundMusicSelect.querySelector('option[value="custom"]');
                    if (customOption) {
                        backgroundMusicSelect.insertBefore(option, customOption);
                    } else {
                        backgroundMusicSelect.appendChild(option);
                    }

                    addedFiles.add(fileName);
                }
            }

            // 检查是否有添加任何音频文件，如果没有则提示用户
            if (addedFiles.size === 0) {
                setTimeout(() => {
                    // 添加一个临时选项提示用户
                    const option = document.createElement('option');
                    option.value = 'none';
                    option.textContent = '🎵 请在audio文件夹中添加音频文件';
                    const customOption = backgroundMusicSelect.querySelector('option[value="custom"]');
                    if (customOption) {
                        backgroundMusicSelect.insertBefore(option, customOption);
                    } else {
                        backgroundMusicSelect.appendChild(option);
                    }

                    // 确保默认选中"无背景音乐"选项
                    const noneOption = backgroundMusicSelect.querySelector('option[value="musicnone"]');
                    if (noneOption) {
                        noneOption.selected = true;
                    }

                    // 显示提示框
                    alert('提示：在audio文件夹中未找到音频文件。请上传音频文件到audio文件夹后刷新页面。');
                }, 100);
            } else {
                // 当有音频文件时，确保默认选中"无背景音乐"选项
                setTimeout(() => {
                    const noneOption = backgroundMusicSelect.querySelector('option[value="musicnone"]');
                    if (noneOption) {
                        noneOption.selected = true;
                    }
                }, 100);
            }
        }
    } catch (error) {
        console.log('无法读取本地背景音乐文件夹:', error);
        // 如果无法读取本地文件夹，保持原有功能不变
    }
}

// 初始化输入方式切换
function initializeInputMethodTabs() {
    const textInputTab = document.getElementById('textInputTab');
    const fileUploadTab = document.getElementById('fileUploadTab');
    const textInputArea = document.getElementById('textInputArea');
    const fileUploadArea = document.getElementById('fileUploadArea');

    textInputTab.addEventListener('click', function () {
        currentInputMethod = 'text';
        textInputTab.classList.add('active');
        fileUploadTab.classList.remove('active');
        textInputArea.style.display = 'block';
        fileUploadArea.style.display = 'none';
        document.getElementById('text').required = true;
    });

    fileUploadTab.addEventListener('click', function () {
        currentInputMethod = 'file';
        fileUploadTab.classList.add('active');
        textInputTab.classList.remove('active');
        textInputArea.style.display = 'none';
        fileUploadArea.style.display = 'block';
        document.getElementById('text').required = false;
    });
}

// 初始化文件上传功能
function initializeFileUpload() {
    const fileDropZone = document.getElementById('fileDropZone');
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    const fileRemoveBtn = document.getElementById('fileRemoveBtn');

    // 点击上传区域
    fileDropZone.addEventListener('click', function () {
        fileInput.click();
    });

    // 文件选择
    fileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            handleFileSelect(file);
        }
    });

    // 拖拽功能
    fileDropZone.addEventListener('dragover', function (e) {
        e.preventDefault();
        fileDropZone.classList.add('dragover');
    });

    fileDropZone.addEventListener('dragleave', function (e) {
        e.preventDefault();
        fileDropZone.classList.remove('dragover');
    });

    fileDropZone.addEventListener('drop', function (e) {
        e.preventDefault();
        fileDropZone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) {
            handleFileSelect(file);
        }
    });

    // 移除文件
    fileRemoveBtn.addEventListener('click', function () {
        selectedFile = null;
        fileInput.value = '';
        fileInfo.style.display = 'none';
        fileDropZone.style.display = 'block';
    });
}

// 处理文件选择
function handleFileSelect(file) {
    // 验证文件类型
    if (!file.type.includes('text/') && !file.name.toLowerCase().endsWith('.txt')) {
        alert('请选择txt格式的文本文件');
        return;
    }

    // 验证文件大小
    if (file.size > 500 * 1024) {
        alert('文件大小不能超过500KB');
        return;
    }

    selectedFile = file;

    // 显示文件信息
    document.getElementById('fileName').textContent = file.name;
    document.getElementById('fileSize').textContent = formatFileSize(file.size);
    document.getElementById('fileInfo').style.display = 'flex';
    document.getElementById('fileDropZone').style.display = 'none';
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 表单提交处理
document.getElementById('ttsForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // 立即检查背景音乐设置 - 在任何处理开始前
    const backgroundMusic = document.getElementById('backgroundMusic').value;
    if (backgroundMusic === 'custom' && !customMusicFile) {
        // 立即显示提示并完全退出
        alert('提示：您选择了自定义音乐，请先上传音乐文件！');
        return;
    }

    const voice = document.getElementById('voice').value;
    const speed = document.getElementById('speed').value;
    const pitch = document.getElementById('pitch').value;
    const style = document.getElementById('style').value;

    const generateBtn = document.getElementById('generateBtn');
    const resultContainer = document.getElementById('result');
    const loading = document.getElementById('loading');
    const success = document.getElementById('success');
    const error = document.getElementById('error');

    // 验证输入
    if (currentInputMethod === 'text') {
        const text = document.getElementById('text').value;
        if (!text.trim()) {
            alert('请输入要转换的文本内容');
            return;
        }
    } else if (currentInputMethod === 'file') {
        if (!selectedFile) {
            alert('请选择要上传的txt文件');
            return;
        }
    }

    // 重置状态
    resultContainer.style.display = 'block';
    loading.style.display = 'block';
    success.style.display = 'none';
    error.style.display = 'none';
    generateBtn.disabled = true;
    generateBtn.textContent = '生成中...';

    try {
        let response;
        let textLength = 0;

        // 更新加载提示
        const loadingText = document.getElementById('loadingText');
        const progressInfo = document.getElementById('progressInfo');

        // 获取背景音乐和音量设置
        const backgroundMusic = document.getElementById('backgroundMusic').value;
        const musicVolume = document.getElementById('musicVolume').value;

        if (currentInputMethod === 'text') {
            // 手动输入文本
            const text = document.getElementById('text').value;
            textLength = text.length;

            // 根据文本长度显示不同的提示
            if (textLength > 3000) {
                loadingText.textContent = '正在处理长文本，请耐心等待...';
                progressInfo.textContent = '文本长度: ' + textLength + ' 字符，预计需要 ' + (Math.ceil(textLength / 1500) * 2) + ' 秒';
            } else {
                loadingText.textContent = '正在生成语音，请稍候...';
                progressInfo.textContent = '文本长度: ' + textLength + ' 字符';
            }

            response = await fetch('/v1/audio/speech', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    input: text,
                    voice: voice,
                    speed: parseFloat(speed),
                    pitch: pitch,
                    style: style
                })
            });
        } else {
            // 文件上传
            loadingText.textContent = '正在处理上传的文件...';
            progressInfo.textContent = '文件: ' + selectedFile.name + ' (' + formatFileSize(selectedFile.size) + ')';

            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('voice', voice);
            formData.append('speed', speed);
            formData.append('pitch', pitch);
            formData.append('style', style);

            response = await fetch('/v1/audio/speech', {
                method: 'POST',
                body: formData
            });
        }

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || '生成失败');
        }

        const audioBlob = await response.blob();

        // 检查是否需要添加背景音乐
        // 复用之前声明的backgroundMusic变量
        const adjustedMusicVolume = parseFloat(musicVolume) / 100; // 转换为0-1范围

        let finalAudioBlob = audioBlob;

        // 如果选择了背景音乐且不是"无背景音乐"或提示选项
        if (backgroundMusic !== 'musicnone' && backgroundMusic !== 'none') {
            loadingText.textContent = '正在合成背景音乐...';

            if (backgroundMusic === 'custom') {
                // 由于已经在表单提交最开始检查过，这里可以直接使用
                finalAudioBlob = await mixAudio(audioBlob, customMusicFile, adjustedMusicVolume);
            } else {
                // 使用内置音乐，这里创建简单的音调作为背景音乐
                loadingText.textContent = '正在生成背景音乐...';
                // 生成对应的背景音乐并混合
                finalAudioBlob = await mixWithPresetMusic(audioBlob, backgroundMusic, adjustedMusicVolume);
                console.log("已选择内置音乐:" + backgroundMusic, "音量:" + adjustedMusicVolume);
            }
        }

        const audioUrl = URL.createObjectURL(finalAudioBlob);

        // 显示音频播放器
        const audioPlayer = document.getElementById('audioPlayer');
        const downloadBtn = document.getElementById('downloadBtn');

        audioPlayer.src = audioUrl;
        downloadBtn.href = audioUrl;

        loading.style.display = 'none';
        success.style.display = 'block';

        // 显示公众号推广组件
        setTimeout(() => {
            const wechatPromotion = document.getElementById('wechatPromotion');
            wechatPromotion.style.display = 'block';
            wechatPromotion.classList.add('fade-in');
        }, 1000);

    } catch (err) {
        loading.style.display = 'none';
        error.style.display = 'block';

        // 根据错误类型显示不同的提示
        if (err.message.includes('Too many subrequests')) {
            error.textContent = '错误: 文本过长导致请求过多，请缩短文本内容或分段处理';
        } else if (err.message.includes('频率限制') || err.message.includes('429')) {
            error.textContent = '错误: 请求过于频繁，请稍后再试';
        } else if (err.message.includes('分块数量') && err.message.includes('超过限制')) {
            error.textContent = '错误: ' + err.message;
        } else {
            error.textContent = '错误: ' + err.message;
        }
    } finally {
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<span>🎙️</span><span>开始生成语音</span>';
    }
});

// 绑定背景音乐选择事件
document.getElementById('backgroundMusic').addEventListener('change', function () {
    const customMusicArea = document.getElementById('customMusicArea');
    if (this.value === 'custom') {
        customMusicArea.style.display = 'block';
    } else {
        customMusicArea.style.display = 'none';
    }
});

// 音量滑块实时更新样式
document.getElementById('musicVolume').addEventListener('input', function () {
    const value = this.value;
    this.style.background = "linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) " + value + "%, var(--border-color) " + value + "%, var(--border-color) 100%)";
});

// 自定义音乐上传功能
let customMusicFile = null;
const customMusicDropZone = document.getElementById('customMusicDropZone');
const customMusicInput = document.getElementById('customMusicInput');
const customMusicInfo = document.getElementById('customMusicInfo');
const customMusicName = document.getElementById('customMusicName');
const customMusicSize = document.getElementById('customMusicSize');
const customMusicRemoveBtn = document.getElementById('customMusicRemoveBtn');

// 点击上传区域触发文件选择
customMusicDropZone.addEventListener('click', function () {
    customMusicInput.click();
});

// 监听文件选择变化
customMusicInput.addEventListener('change', function () {
    if (this.files && this.files[0]) {
        handleMusicFile(this.files[0]);
    }
});

// 拖拽事件处理
customMusicDropZone.addEventListener('dragover', function (e) {
    e.preventDefault();
    this.classList.add('dragover');
});

customMusicDropZone.addEventListener('dragleave', function () {
    this.classList.remove('dragover');
});

customMusicDropZone.addEventListener('drop', function (e) {
    e.preventDefault();
    this.classList.remove('dragover');

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleMusicFile(e.dataTransfer.files[0]);
    }
});

// 处理音乐文件
function handleMusicFile(file) {
    // 验证文件类型
    const allowedTypes = ['audio/mp3', 'audio/wav', 'audio/m4a', 'audio/mpeg'];
    const allowedExtensions = ['.mp3', '.wav', '.m4a'];
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));

    if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
        alert('不支持的文件类型，请上传mp3、wav或m4a格式的音乐文件');
        return;
    }

    // 验证文件大小（最大5MB）
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        alert('文件大小不能超过5MB');
        return;
    }

    // 保存文件并显示文件信息
    customMusicFile = file;
    customMusicName.textContent = file.name;
    customMusicSize.textContent = formatFileSize(file.size);
    customMusicInfo.style.display = 'flex';
}

// 移除自定义音乐
customMusicRemoveBtn.addEventListener('click', function () {
    customMusicFile = null;
    customMusicInput.value = '';
    customMusicInfo.style.display = 'none';
});

// 初始化模式切换器
function initializeModeSwitcher() {
    const ttsMode = document.getElementById('ttsMode');
    const transcriptionMode = document.getElementById('transcriptionMode');
    const mainContent = document.querySelector('.main-content');
    const transcriptionContainer = document.getElementById('transcriptionContainer');

    ttsMode.addEventListener('click', function () {
        switchMode('tts');
    });

    transcriptionMode.addEventListener('click', function () {
        switchMode('transcription');
    });
}

// 切换功能模式
function switchMode(mode) {
    const ttsMode = document.getElementById('ttsMode');
    const transcriptionMode = document.getElementById('transcriptionMode');
    const mainContent = document.querySelector('.main-content');
    const transcriptionContainer = document.getElementById('transcriptionContainer');
    const wechatPromotion = document.getElementById('wechatPromotion');

    currentMode = mode;

    if (mode === 'tts') {
        // 切换到TTS模式
        ttsMode.classList.add('active');
        transcriptionMode.classList.remove('active');
        mainContent.style.display = 'block';
        transcriptionContainer.style.display = 'none';
    } else {
        // 切换到语音转录模式
        transcriptionMode.classList.add('active');
        ttsMode.classList.remove('active');
        mainContent.style.display = 'none';
        transcriptionContainer.style.display = 'block';
    }

    // 隐藏推广组件
    wechatPromotion.style.display = 'none';
}

// 初始化音频上传功能
function initializeAudioUpload() {
    const audioDropZone = document.getElementById('audioDropZone');
    const audioFileInput = document.getElementById('audioFileInput');
    const audioFileInfo = document.getElementById('audioFileInfo');
    const audioFileRemoveBtn = document.getElementById('audioFileRemoveBtn');

    // 点击上传区域
    audioDropZone.addEventListener('click', function () {
        audioFileInput.click();
    });

    // 文件选择
    audioFileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            handleAudioFileSelect(file);
        }
    });

    // 拖拽功能
    audioDropZone.addEventListener('dragover', function (e) {
        e.preventDefault();
        audioDropZone.classList.add('dragover');
    });

    audioDropZone.addEventListener('dragleave', function (e) {
        e.preventDefault();
        audioDropZone.classList.remove('dragover');
    });

    audioDropZone.addEventListener('drop', function (e) {
        e.preventDefault();
        audioDropZone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) {
            handleAudioFileSelect(file);
        }
    });

    // 移除文件
    audioFileRemoveBtn.addEventListener('click', function () {
        selectedAudioFile = null;
        audioFileInput.value = '';
        audioFileInfo.style.display = 'none';
        audioDropZone.style.display = 'block';
    });
}

// 处理音频文件选择
function handleAudioFileSelect(file) {
    // 验证文件类型
    const allowedTypes = [
        'audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/m4a', 'audio/flac', 'audio/aac',
        'audio/ogg', 'audio/webm', 'audio/amr', 'audio/3gpp'
    ];

    const isValidType = allowedTypes.some(type =>
        file.type.includes(type) ||
        file.name.toLowerCase().match(/\.(mp3|wav|m4a|flac|aac|ogg|webm|amr|3gp)$/i)
    );

    if (!isValidType) {
        alert('请选择音频格式的文件（mp3、wav、m4a、flac、aac、ogg、webm、amr、3gp）');
        return;
    }

    // 验证文件大小（限制为10MB）
    if (file.size > 10 * 1024 * 1024) {
        alert('音频文件大小不能超过10MB');
        return;
    }

    selectedAudioFile = file;

    // 显示文件信息
    document.getElementById('audioFileName').textContent = file.name;
    document.getElementById('audioFileSize').textContent = formatFileSize(file.size);
    document.getElementById('audioFileInfo').style.display = 'flex';
    document.getElementById('audioDropZone').style.display = 'none';
}

// 初始化Token配置
function initializeTokenConfig() {
    const tokenRadios = document.querySelectorAll('input[name="tokenOption"]');
    const tokenInput = document.getElementById('tokenInput');

    tokenRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'custom') {
                tokenInput.style.display = 'block';
                tokenInput.required = true;
            } else {
                tokenInput.style.display = 'none';
                tokenInput.required = false;
                tokenInput.value = '';
            }
        });
    });
}

// 处理语音转录表单提交
document.getElementById('transcriptionForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const transcribeBtn = document.getElementById('transcribeBtn');
    const transcriptionResult = document.getElementById('transcriptionResult');
    const transcriptionLoading = document.getElementById('transcriptionLoading');
    const transcriptionSuccess = document.getElementById('transcriptionSuccess');
    const transcriptionError = document.getElementById('transcriptionError');

    // 验证音频文件
    if (!selectedAudioFile) {
        alert('请选择要转录的音频文件');
        return;
    }

    // 获取Token配置
    const tokenOption = document.querySelector('input[name="tokenOption"]:checked').value;
    const customToken = document.getElementById('tokenInput').value;

    if (tokenOption === 'custom' && !customToken.trim()) {
        alert('请输入自定义Token');
        return;
    }

    // 重置状态
    transcriptionResult.style.display = 'block';
    transcriptionLoading.style.display = 'block';
    transcriptionSuccess.style.display = 'none';
    transcriptionError.style.display = 'none';
    transcribeBtn.disabled = true;
    transcribeBtn.textContent = '转录中...';

    // 更新加载提示
    const loadingText = document.getElementById('transcriptionLoadingText');
    const progressInfo = document.getElementById('transcriptionProgressInfo');
    loadingText.textContent = '正在转录音频，请稍候...';
    progressInfo.textContent = '文件: ' + selectedAudioFile.name + ' (' + formatFileSize(selectedAudioFile.size) + ')';

    try {
        // 构建FormData
        const formData = new FormData();
        formData.append('file', selectedAudioFile);

        if (tokenOption === 'custom') {
            formData.append('token', customToken);
        }

        const response = await fetch('/v1/audio/transcriptions', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || '转录失败');
        }

        const result = await response.json();

        // 显示转录结果
        document.getElementById('transcriptionText').value = result.text || '';
        transcriptionLoading.style.display = 'none';
        transcriptionSuccess.style.display = 'block';

        // 显示公众号推广组件
        setTimeout(() => {
            const wechatPromotion = document.getElementById('wechatPromotion');
            wechatPromotion.style.display = 'block';
            wechatPromotion.classList.add('fade-in');
        }, 1000);

    } catch (err) {
        transcriptionLoading.style.display = 'none';
        transcriptionError.style.display = 'block';
        transcriptionError.textContent = '错误: ' + err.message;
    } finally {
        transcribeBtn.disabled = false;
        transcribeBtn.innerHTML = '<span>🎧</span><span>开始语音转录</span>';
    }
});

// 复制转录结果
document.getElementById('copyTranscriptionBtn').addEventListener('click', function () {
    const transcriptionText = document.getElementById('transcriptionText');
    transcriptionText.select();
    document.execCommand('copy');

    // 临时改变按钮文本
    const originalText = this.innerHTML;
    this.innerHTML = '<span>✅</span><span>已复制</span>';
    setTimeout(() => {
        this.innerHTML = originalText;
    }, 2000);
});

// 编辑转录结果
document.getElementById('editTranscriptionBtn').addEventListener('click', function () {
    const transcriptionText = document.getElementById('transcriptionText');
    const isReadonly = transcriptionText.readOnly;

    if (isReadonly) {
        transcriptionText.readOnly = false;
        transcriptionText.focus();
        this.innerHTML = '<span>💾</span><span>保存编辑</span>';
    } else {
        transcriptionText.readOnly = true;
        this.innerHTML = '<span>✏️</span><span>编辑文本</span>';
    }
});

// 转为语音功能
document.getElementById('useForTtsBtn').addEventListener('click', function () {
    const transcriptionText = document.getElementById('transcriptionText').value;

    if (!transcriptionText.trim()) {
        alert('转录结果为空，无法转换为语音');
        return;
    }

    // 切换到TTS模式
    switchMode('tts');

    // 将转录文本填入TTS文本框
    document.getElementById('text').value = transcriptionText;

    // 滚动到TTS区域
    document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
});

// 从网络获取预设背景音乐并混合
async function mixWithPresetMusic(voiceBlob, musicType, musicVolume) {
    try {
        // 更新加载状态
        const loadingText = document.getElementById('loadingText');
        loadingText.textContent = '正在下载背景音乐...';

        // 获取对应音乐类型的URL
        const musicUrl = getBackgroundMusicUrl(musicType);

        // 尝试下载背景音乐
        let musicBlob;
        try {
            loadingText.textContent = '正在加载背景音乐...';
            const response = await fetch(musicUrl);
            if (!response.ok) {
                throw new Error('背景音乐下载失败: ' + response.status);
            }
            musicBlob = await response.blob();
        } catch (error) {
            console.warn('无法从网络获取背景音乐，将使用备用方案:', error);
            // 如果网络获取失败，使用本地生成的简单音乐作为备用
            return await generateAndMixFallbackMusic(voiceBlob, musicType, musicVolume);
        }

        // 创建音频上下文
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();

        loadingText.textContent = '正在处理音频...';

        // 解码语音音频
        const voiceBuffer = await decodeAudioData(audioContext, voiceBlob);

        // 解码背景音乐
        const musicBuffer = await decodeAudioData(audioContext, musicBlob);

        // 创建混合后的音频缓冲区
        const mixBuffer = audioContext.createBuffer(
            1, // 单声道
            voiceBuffer.length,
            voiceBuffer.sampleRate
        );

        const mixData = mixBuffer.getChannelData(0);
        const voiceData = voiceBuffer.getChannelData(0);
        const musicData = musicBuffer.getChannelData(0);

        // 混合音频，调整背景音乐音量
        for (let i = 0; i < voiceBuffer.length; i++) {
            // 获取对应位置的音乐数据，使用循环方式让音乐重复播放
            const musicIndex = Math.floor(i * musicBuffer.length / voiceBuffer.length);
            const musicSample = musicData[musicIndex] * musicVolume;

            // 将语音和音乐混合，防止过度削波
            mixData[i] = Math.min(Math.max(voiceData[i] * 0.8 + musicSample * 0.5, -1), 1);
        }

        // 将混合后的音频缓冲区转换为Blob
        const mixedBlob = await bufferToWave(mixBuffer, mixBuffer.length);
        return mixedBlob;
    } catch (error) {
        console.error('下载并混合背景音乐失败:', error);
        // 如果混合失败，返回原始语音
        return voiceBlob;
    }
}

// 获取背景音乐URL
function getBackgroundMusicUrl(musicType) {
    // 如果选择的是提示选项，不播放任何音乐
    if (musicType === 'none' || musicType === 'musicnone') {
        return null; // 返回null表示不加载任何音乐
    }

    // 检查是否为本地音乐文件
    if (musicType.startsWith('local_')) {
        const fileName = decodeURIComponent(musicType.replace('local_', ''));
        return `audio/${fileName}`;
    }

    // 为了向后兼容，保留原有网络音乐选项
    const musicUrls = {
        'music1': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // 轻松愉快
        'music2': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // 安静优雅
        'music3': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // 激情澎湃
        'music4': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', // 温馨浪漫
        'music5': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'  // 悬疑紧张
    };

    return musicUrls[musicType] || musicUrls.music1; // 默认返回第一个
}

// 备用方案：生成简单的背景音乐（当网络音频获取失败时使用）
async function generateAndMixFallbackMusic(voiceBlob, musicType, musicVolume) {
    const loadingText = document.getElementById('loadingText');
    loadingText.textContent = '使用本地备用音乐...';

    // 创建音频上下文
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    // 解码语音音频
    const voiceBuffer = await decodeAudioData(audioContext, voiceBlob);

    // 创建一个简单的音乐缓冲区
    const buffer = audioContext.createBuffer(1, voiceBuffer.length, voiceBuffer.sampleRate);
    const channelData = buffer.getChannelData(0);

    // 根据音乐类型设置不同的参数
    let baseFreq, patternLength, speed;

    switch (musicType) {
        case 'music1': // 轻松愉快
            baseFreq = 330; // E4
            patternLength = 8;
            speed = 2.0;
            break;
        case 'music2': // 安静优雅
            baseFreq = 262; // C4
            patternLength = 4;
            speed = 0.8;
            break;
        case 'music3': // 激情澎湃
            baseFreq = 392; // G4
            patternLength = 6;
            speed = 2.5;
            break;
        case 'music4': // 温馨浪漫
            baseFreq = 349; // F4
            patternLength = 8;
            speed = 1.2;
            break;
        case 'music5': // 悬疑紧张
            baseFreq = 294; // D4
            patternLength = 7;
            speed = 1.8;
            break;
        default:
            baseFreq = 330;
            patternLength = 4;
            speed = 1.5;
    }

    // 生成更复杂一些的音调序列
    const samplesPerBeat = buffer.sampleRate / (4 * speed);

    for (let i = 0; i < buffer.length; i++) {
        const beatPos = Math.floor(i / samplesPerBeat);
        const notePos = beatPos % patternLength;

        // 每个模式位置生成不同频率
        let freq;
        switch (notePos) {
            case 0: freq = baseFreq;
                break;
            case 1: freq = baseFreq * 1.25; // 上升一个大三度
                break;
            case 2: freq = baseFreq * 1.5; // 上升一个纯五度
                break;
            case 3: freq = baseFreq * 1.75; // 上升一个小七度
                break;
            case 4: freq = baseFreq * 2.0; // 上升一个八度
                break;
            case 5: freq = baseFreq * 1.75;
                break;
            case 6: freq = baseFreq * 1.5;
                break;
            case 7: freq = baseFreq * 1.25;
                break;
            default: freq = baseFreq;
        }

        // 使用正弦波生成音调，并添加音量包络
        const envelope = Math.sin(Math.PI * (beatPos % patternLength) / patternLength);
        const value = Math.sin(2 * Math.PI * freq * i / buffer.sampleRate) * envelope * 0.3;

        // 添加一些白噪声让声音更丰富
        const noise = (Math.random() * 2 - 1) * 0.05;
        channelData[i] = value + noise;
    }

    // 创建混合后的音频缓冲区
    const mixBuffer = audioContext.createBuffer(1, voiceBuffer.length, voiceBuffer.sampleRate);
    const mixData = mixBuffer.getChannelData(0);
    const voiceData = voiceBuffer.getChannelData(0);

    // 混合音频
    for (let i = 0; i < voiceBuffer.length; i++) {
        mixData[i] = Math.min(Math.max(voiceData[i] * 0.8 + channelData[i] * musicVolume * 0.5, -1), 1);
    }

    // 将混合后的音频缓冲区转换为Blob
    return await bufferToWave(mixBuffer, mixBuffer.length);
}
async function mixAudio(voiceBlob, musicFile, musicVolume) {
    try {
        console.log('开始混合音频，音乐音量:', musicVolume);

        // 创建音频上下文
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();

        // 解码语音音频
        const voiceBuffer = await decodeAudioData(audioContext, voiceBlob);
        console.log('语音音频解码完成，长度:', voiceBuffer.length);

        // 读取音乐文件并解码
        const musicBlob = await new Promise(resolve => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(new Blob([reader.result]));
            reader.readAsArrayBuffer(musicFile);
        });

        let musicBuffer;
        try {
            musicBuffer = await decodeAudioData(audioContext, musicBlob);
            console.log('音乐文件解码完成，长度:', musicBuffer.length);
        } catch (decodeError) {
            console.error('音乐文件解码失败:', decodeError);
            // 如果解码失败，使用简单音调作为替代
            console.warn('使用替代音调作为背景音乐');
            return await generateAndMixFallbackMusic(voiceBlob, 'music1', musicVolume);
        }

        // 计算音乐音量增益，大幅提高音乐音量
        const musicGain = Math.max(0.3, Math.min(1.5, musicVolume * 1.2)); // 提高增益上限和基础值
        console.log('应用的音乐增益:', musicGain);

        // 创建混合后的音频缓冲区
        const mixBuffer = audioContext.createBuffer(
            1, // 单声道
            voiceBuffer.length,
            voiceBuffer.sampleRate
        );

        const mixData = mixBuffer.getChannelData(0);
        const voiceData = voiceBuffer.getChannelData(0);
        const musicData = musicBuffer.getChannelData(0);

        // 大幅调整音量因子，让音乐更突出
        const voiceFactor = 0.5; // 进一步降低语音比例
        const musicFactor = 0.9 * musicGain; // 大幅提高音乐基础音量

        console.log('开始音频混合处理...');

        // 混合音频，实现音乐循环播放
        for (let i = 0; i < voiceBuffer.length; i++) {
            // 使用循环索引确保音乐持续播放
            const musicIndex = Math.floor(i * musicBuffer.length / voiceBuffer.length) % musicBuffer.length;

            // 直接提升音乐采样值，进一步加强音乐音量
            const musicSample = musicData[musicIndex] * 1.5;
            const voiceValue = voiceData[i];

            // 简化动态音量控制，减少音乐音量衰减
            // 仅在语音非常强时略微降低音乐音量
            const voiceAbs = Math.abs(voiceValue);
            const dynamicMusicFactor = voiceAbs > 0.7 ?
                musicFactor * (1 - (voiceAbs - 0.7) * 0.4) :
                musicFactor;

            // 混合音频
            let mixedValue = voiceValue * voiceFactor + musicSample * dynamicMusicFactor;

            // 应用硬限幅，但允许一定程度的削波以增加响度
            mixedValue = Math.max(-1.2, Math.min(1.2, mixedValue));

            // 软削波处理
            if (mixedValue > 1) {
                mixData[i] = 1 - Math.exp(1 - mixedValue) * 0.5;
            } else if (mixedValue < -1) {
                mixData[i] = -1 + Math.exp(mixedValue + 1) * 0.5;
            } else {
                mixData[i] = mixedValue;
            }
        }

        console.log('音频混合完成');

        // 将混合后的音频缓冲区转换为Blob
        const mixedBlob = await bufferToWave(mixBuffer, mixBuffer.length);
        return mixedBlob;
    } catch (error) {
        console.error('混合音频失败:', error);
        // 如果混合失败，返回原始语音
        return voiceBlob;
    }
}

// 辅助函数：解码音频数据
function decodeAudioData(audioContext, blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = async () => {
            try {
                const audioData = await audioContext.decodeAudioData(reader.result);
                resolve(audioData);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
    });
}

// 辅助函数：将AudioBuffer转换为WAV格式的Blob
function bufferToWave(buffer, len) {
    const numOfChan = 1;
    const length = len * numOfChan * 2; // 16位
    const result = new ArrayBuffer(44 + length);
    const view = new DataView(result);

    // WAV文件头
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 32 + length, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM格式
    view.setUint16(22, numOfChan, true);
    view.setUint32(24, buffer.sampleRate, true);
    view.setUint32(28, buffer.sampleRate * 2, true); // 位率
    view.setUint16(32, numOfChan * 2, true); // 块对齐
    view.setUint16(34, 16, true); // 16位
    writeString(view, 36, 'data');
    view.setUint32(40, length, true);

    // 写入音频数据
    const bufferData = buffer.getChannelData(0);
    let index = 44;
    const volume = 1;
    for (let i = 0; i < len; i++) {
        let sample = bufferData[i] * volume;
        if (sample > 1) sample = 1;
        if (sample < -1) sample = -1;
        sample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
        view.setInt16(index, sample, true);
        index += 2;
    }

    return new Blob([result], { type: 'audio/wav' });

    // 辅助函数：写入字符串到DataView
    function writeString(view, offset, string) {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    }
}

// 初始化国际化
function initializeI18n() {
    // 检查本地存储中的语言设置
    const savedLang = localStorage.getItem('voicecraft-language');

    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    } else {
        // 自动检测浏览器语言
        currentLanguage = detectLanguage();
    }

    // 应用语言设置
    setLanguage(currentLanguage);
}

// 初始化语言切换器
function initializeLanguageSwitcher() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');

    // 切换下拉菜单显示/隐藏
    languageBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });

    // 点击页面其他地方时隐藏下拉菜单
    document.addEventListener('click', function () {
        languageDropdown.classList.remove('show');
    });

    // 语言选择
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');
            setLanguage(selectedLang);
            languageDropdown.classList.remove('show');
        });
    });
}