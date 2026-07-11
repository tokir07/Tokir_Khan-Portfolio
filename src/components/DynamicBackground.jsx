import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const DynamicBackground = () => {
    const { theme } = useTheme();
    const canvasRef = useRef(null);
    const isDark = theme === 'dark';

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Resize canvas to full viewport
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // List of backend technology architectural nodes
        const nodeLabels = [
            'HTTP', 'Controller', 'Spring Security', 'JWT Filter', 
            'DispatcherServlet', 'Service Boundary', 'JPA Repo', 
            'Hibernate ORM', 'PostgreSQL DB', 'Redis Cache', 
            'HikariCP', 'REST Endpoints', 'OAuth2 Gate', 'Docker Registry'
        ];

        // Setup nodes with positions and velocities
        const nodes = nodeLabels.map((label, idx) => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            label,
            size: Math.random() * 2 + 1.5,
        }));

        const maxDist = 280;
        let packets = [];

        // Spawn a request packet traveling between close nodes
        const spawnPacket = () => {
            if (nodes.length < 2) return;
            const fromIdx = Math.floor(Math.random() * nodes.length);
            const candidates = [];
            
            for (let i = 0; i < nodes.length; i++) {
                if (i === fromIdx) continue;
                const dist = Math.hypot(nodes[fromIdx].x - nodes[i].x, nodes[fromIdx].y - nodes[i].y);
                if (dist < maxDist) {
                    candidates.push(i);
                }
            }

            if (candidates.length > 0) {
                const toIdx = candidates[Math.floor(Math.random() * candidates.length)];
                packets.push({
                    from: fromIdx,
                    to: toIdx,
                    progress: 0,
                    speed: 0.003 + Math.random() * 0.005,
                    color: Math.random() > 0.5 ? '#ef4444' : '#3b82f6' // Red or Blue packets
                });
            }
        };

        const spawnInterval = setInterval(spawnPacket, 1800);

        // Track cursor coordinates
        let mouseX = -1000;
        let mouseY = -1000;
        
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Rendering logic
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Update node coordinates (bounce boundaries)
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                node.x = Math.max(0, Math.min(canvas.width, node.x));
                node.y = Math.max(0, Math.min(canvas.height, node.y));
            });

            // 2. Draw system mesh lines (connections)
            ctx.lineWidth = 0.5;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * (isDark ? 0.05 : 0.08);
                        ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // 3. Draw mouse cursor grid spotlight connections
            if (mouseX > 0) {
                nodes.forEach(node => {
                    const dist = Math.hypot(node.x - mouseX, node.y - mouseY);
                    if (dist < maxDist - 60) {
                        const alpha = (1 - dist / (maxDist - 60)) * (isDark ? 0.08 : 0.12);
                        // Subtle primary-red/blue spotlight lines linking node to cursor
                        ctx.strokeStyle = isDark ? `rgba(239, 68, 68, ${alpha})` : `rgba(59, 130, 246, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(mouseX, mouseY);
                        ctx.stroke();
                    }
                });
            }

            // 4. Update and draw request packet dots
            packets = packets.filter(p => {
                p.progress += p.speed;
                if (p.progress >= 1) return false;

                const fromNode = nodes[p.from];
                const toNode = nodes[p.to];
                if (!fromNode || !toNode) return false;

                const px = fromNode.x + (toNode.x - fromNode.x) * p.progress;
                const py = fromNode.y + (toNode.y - fromNode.y) * p.progress;

                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 6;
                ctx.beginPath();
                ctx.arc(px, py, 2.2, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;

                return true;
            });

            // 5. Draw architectural nodes and labels
            ctx.font = '9px monospace';
            nodes.forEach(node => {
                // Node marker dot
                ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)';
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                ctx.fill();

                // Faint architectural label
                ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.12)';
                ctx.fillText(node.label, node.x + 8, node.y + 3);
            });

            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            clearInterval(spawnInterval);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500">
            {/* Dynamic request flow network canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

            {/* Aurora blur red blob */}
            <div className={`absolute top-1/3 left-1/3 -translate-x-[140%] -translate-y-[120%] w-[600px] h-[600px] rounded-full blur-[130px] transition-colors duration-700 ${isDark ? 'bg-red-500/5' : 'bg-red-400/18'}`} />

            {/* Aurora blur blue blob */}
            <div className={`absolute top-2/3 left-2/3 translate-x-[40%] translate-y-[40%] w-[700px] h-[700px] rounded-full blur-[150px] transition-colors duration-700 ${isDark ? 'bg-blue-500/4' : 'bg-blue-400/14'}`} />
        </div>
    );
};

export default DynamicBackground;
